#ifndef GROUP_H
#define GROUP_H
#include "user.h"
#include <iostream>
#include <vector>
#include <map>
#include <QString>
#include <QObject>
#include <QJsonObject>
#include <QJsonArray>
using namespace std;



class Group : public QObject
{
    Q_OBJECT
private:
    QString name;
    vector<User*> users;
    map<vector<User*>,Amount> owes;


public:
    Group(QString name);
    void addUser(User* user);

    int getUsersNum();

    User* getUser(User* user)
    {
        for (User* u : users)
        {
            if (u == user) return u;
        }
        return nullptr;
    }

    void addGroupBill(User* user, Bill* bill);

    QJsonObject generateData();

    QString toQString();
private:
    void compress();
};

#endif // GROUP_H
