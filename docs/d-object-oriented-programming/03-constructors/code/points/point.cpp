// Point.cpp
#include "Point.h"

namespace Geometry {

  Point::Point(void) { }

  Point::Point(double x, double y) {
    moveTo(x, y);
  }

  void Point::moveTo(double x, double y) {
    this->x = x;
    this->y = y;
  }
  
  void Point::moveBy(double deltaX, double deltaY) {
    this->x += deltaX;
    this->y += deltaY;
  }

  double Point::getX(void) const {
    return x;
  }

  double Point::getY(void) const {
    return y;
  }

};