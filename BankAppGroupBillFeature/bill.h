#ifndef BILL_H
#define BILL_H
#include <QString>
#include <QObject>

using namespace std;

enum Currency{
    EUR,
    USD,
    HUF,
    TRY,
    notDEFINED
};

struct Amount{
public:
    double amount;
    Currency currency;
    Amount(){};
    Amount(double amount, Currency currency)
    {
        this->amount = amount;
        this->currency = currency;
    }
};


class Bill : public QObject
{
    Q_OBJECT
private:
    QString name;
    Amount amount;
public:
    Bill(){};
    Bill(const QString name, const Amount amount);


    Amount getAmount() const;
};

#endif // BILL_H
