#include <iostream>
using namespace std;

class Animal
{
    public:
        virtual void sound()
        {
            cout << "Animal is making sound";
        }
};
class Dog : public Animal
{
    public:
        void sound override()
        {
            cout << "Dog is barking";
        }
};
int main ()
{
    Animal* a1;
    Dog d1;

}