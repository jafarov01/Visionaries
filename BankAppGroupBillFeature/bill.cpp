#include "bill.h"

Amount Bill::getAmount() const
{
    return amount;
}

Bill::Bill(const QString name, const Amount amount)
{
    this->name = name;
    this->amount = amount;
}
