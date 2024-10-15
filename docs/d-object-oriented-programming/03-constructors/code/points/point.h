// Point.h
#pragma once

namespace Geometry {

  class Point {

    // Constructors
    public:
      Point(void);    // Default constructor
      Point(double x, double y);

    // Methods
    public:
      void moveTo(double x, double y);
      void moveBy(double deltaX, double deltaY);

    public:
      double getX(void) const;
      double getY(void) const;

    // Attributes (instance variables)
    private:
      double x = 0;
      double y = 0;

  };

};