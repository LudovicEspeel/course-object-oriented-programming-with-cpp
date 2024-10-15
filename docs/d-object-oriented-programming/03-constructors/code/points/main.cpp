// Compile using:
// g++ main.cpp point.cpp -o points

#include <iostream>
#include "Point.h"

using namespace std;

int main() {
  cout << "Point demo" << endl;

  Geometry::Point center(8, 77);

  cout << "The point is at ["
    << center.getX() << ", " << center.getY()
    << "]" << endl;

  return 0;
}