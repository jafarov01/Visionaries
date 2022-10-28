#include "user.h"

User::User(QString name, QString email, QString ID)
{
    this->ID = ID;
    this->name = name;
    this->email = email;
}

void User::addBill(Bill *bill)
{
    bills.push_back(bill);
}

Bill* User::getBill(Bill* bill)
{
    for (Bill *b : bills)
    {
        if (b == bill) return b;
    }

    return nullptr;
}

