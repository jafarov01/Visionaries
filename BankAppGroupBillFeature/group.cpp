#include "group.h"

using namespace std;

void Group::compress()
{
    for (auto i = owes.begin(); i != owes.end(); i++)
    {
        for (auto j = owes.begin(); j != owes.end(); j++)
        {
            if (i == j) continue;

            if (i->first.at(0) == j->first.at(1) && i->first.at(1) == j->first.at(0))
            {
                if (i->second.amount > j->second.amount)
                {
                    i->second.amount -= j->second.amount;
                    j->second.amount = 0;
                }
                else if(j->second.amount > i->second.amount)
                {
                    j->second.amount -= i->second.amount;
                    i->second.amount = 0;
                }
                else
                {
                    i->second.amount = j->second.amount = 0;
                }
            }
        }
    }
}

Group::Group(QString name)
{
    this->name = name;
}

void Group::addUser(User* user)
{
    users.push_back(user);
}

int Group::getUsersNum()
{
    return users.size();
}

QString enumToQString(Currency curr)
{
    switch(curr)
    {
        case Currency::EUR:
            return "EUR";
        case Currency::USD:
            return "USD";
        case Currency::TRY:
            return "TRY";
        case Currency::HUF:
            return "HUF";
        default:
            return nullptr;
    }
}

void Group::addGroupBill(User *user, Bill *bill)
{
    double entireAmountBill = bill->getAmount().amount;

    double partForEachUser = entireAmountBill / this->getUsersNum();

    for(User* u : users)
    {
        if (u == user) continue;

        vector<User*> pairs;
        pairs.push_back(u);
        pairs.push_back(user);

        Amount amount(partForEachUser, bill->getAmount().currency);

        map<vector<User*>,Amount>::iterator it = owes.find(pairs);

        if (it != owes.end())
            it->second.amount += amount.amount;
        else
            owes.insert({pairs, amount});

        pairs.clear();
    }

    compress();
}

QJsonObject Group::generateData()
{
    //map<vector<User*>,Amount> owes;
    QJsonObject content;
    QJsonArray loansArray;

    for (auto i = owes.begin(); i != owes.end(); i++)
    {
        QJsonObject loanObject;

        QJsonObject amountObject;
        amountObject.insert("amount", i->second.amount);
        amountObject.insert("currency", enumToQString(i->second.currency));

        loanObject.insert("amountObject", amountObject);

        QJsonObject lender;
        lender.insert("userName", i->first[0]->getName());
        lender.insert("userID", i->first[0]->getID());
        lender.insert("userEmail", i->first[0]->getEmail());

        loanObject.insert("lender", lender);

        QJsonObject lendee;
        lendee.insert("userName", i->first[1]->getName());
        lendee.insert("userID", i->first[1]->getID());
        lendee.insert("userEmail", i->first[1]->getEmail());

        loanObject.insert("lendee", lendee);



        loansArray.push_front(loanObject);
    }
    content.insert("loans", loansArray);

    return content;
}

QString Group::toQString()
{
    QString report;
    for (auto i = owes.begin(); i != owes.end(); i++)
    {
        QString lender = i->first.at(0)->getName();
        QString lendee = i->first.at(1)->getName();
        QString amount = QString::number(i->second.amount);
        QString currency = enumToQString(i->second.currency);

        report += lender + " -> " + lendee + " = " + amount + currency + "\n";

    }
    return report;
}
