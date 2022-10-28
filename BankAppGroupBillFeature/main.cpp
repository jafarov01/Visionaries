#include <QCoreApplication>
#include <QJsonObject>
#include <QJsonDocument>
#include <QJsonArray>
#include <QString>
#include "user.h"
#include "group.h"
#include "bill.h"
#include <QFile>

Currency getCurrency(QString str)
{
    if (str == "EUR") return Currency::EUR;
    else if (str == "USD") return Currency::USD;
    else if (str == "HUF") return Currency::HUF;
    else if (str == "TRY") return Currency::TRY;

    return Currency::notDEFINED;
}

Group* QJsonManipualator(QJsonObject& json)
{
    Group* group = nullptr;

    if (json.contains("group") && json["group"].isObject())
    {
        QJsonObject groupObject = json["group"].toObject();
        QString groupName;

        if (groupObject.contains("groupName"))
        {
            groupName = groupObject["groupName"].toString();
        }
        group = new Group(groupName);

        if (groupObject.contains("accountHolder") && groupObject["accountHolder"].isArray())
        {
            QJsonArray accountHolderArray = groupObject["accountHolder"].toArray();

            for (int i = 0; i < accountHolderArray.size(); i++)
            {
                QJsonObject accountObject = accountHolderArray[i].toObject();

                User* user = nullptr;
                if (accountObject.contains("holderName") &&
                    accountObject.contains("id") &&
                    accountObject.contains("email"))
                {
                    user = new User(accountObject["holderName"].toString(), accountObject["email"].toString(), accountObject["id"].toString());
                    group->addUser(user);
                }

                if (accountObject.contains("bills") && accountObject["bills"].isArray())
                {
                    QJsonArray billsArray = accountObject["bills"].toArray();
                    Bill* bill;
                    for (int j = 0; j < billsArray.size(); j++)
                    {
                        QJsonObject billObject = billsArray[j].toObject();
                        QString billName;
                        if (billObject.contains("billName"))
                        {
                            billName = billObject["billName"].toString();
                        }

                        if (billObject.contains("amountObj") && billObject["amountObj"].isObject())
                        {
                            QJsonObject amountObject = billObject["amountObj"].toObject();
                            if (amountObject.contains("amount")  &&
                                amountObject.contains("currency"))
                            {
                                Currency curr = getCurrency(amountObject["currency"].toString());

                                Amount amount(amountObject["amount"].toDouble(), curr);
                                bill = new Bill(billName, amount);
                            }
                        }
                        user->addBill(bill);
                        group->addGroupBill(user, user->getBill(bill));
                    }
                }
            }
        }
    }
    return group;
}

void writeData(Group* group)
{
    QJsonDocument document;
    QJsonObject jsonObj = group->generateData();
    document.setObject(jsonObj);
    QByteArray bytes = document.toJson( QJsonDocument::Indented );
    QFile generateJsonFile("/home/jafarov/Qt Projects/BankAppGroupBillFeature/generatedData.json");

    if( generateJsonFile.open( QIODevice::WriteOnly | QIODevice::Text | QIODevice::Truncate ) )
    {
        QTextStream iStream( &generateJsonFile );
        cout << "...asdad" << endl;
        iStream << bytes;
        generateJsonFile.close();
    }
    else
    {
        cout << "file open failed" << endl;
    }
}

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    Group* group = nullptr;


    //file open
    QFile file("/home/jafarov/Qt Projects/BankAppGroupBillFeature/data.json");


    if (!file.exists()) {
        cout << "FILE NOT EXITS" << endl;
    }
    else cout << "OK" << endl;

    if( file.open(QIODevice::ReadOnly | QIODevice::Text) )
        {
            QByteArray bytes = file.readAll();


            QJsonParseError jsonError;
            QJsonDocument document = QJsonDocument::fromJson( bytes, &jsonError );
            if( jsonError.error != QJsonParseError::NoError )
            {
                cout << "fromJson failed: " << jsonError.errorString().toStdString() << endl;
                return -1;
            }
            if( document.isObject() )
            {
                QJsonObject jsonObj = document.object();
                //json parsing
                group = QJsonManipualator(jsonObj);
                cout << group->toQString().toStdString();
            }
    }
    else
    {
        cout << "NOT FILE OPENED!" << endl;
    }



    writeData(group);

    return 0;
}
