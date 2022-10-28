#ifndef USER_H
#define USER_H
#include "bill.h"
#include <vector>
#include <map>
#include <QString>
#include <QObject>
using namespace std;

class User : public QObject
{
    Q_OBJECT
private:
    QString ID;
    QString email;
    QString name;
    vector<Bill*> bills;
public:
    User(QString name, QString email, QString ID);

    void addBill(Bill* bill);

    Bill* getBill(Bill* bill);
    QString getName() {return name;}
    QString getID() {return ID;}
    QString getEmail() {return email;}
};

#endif // USER_H
