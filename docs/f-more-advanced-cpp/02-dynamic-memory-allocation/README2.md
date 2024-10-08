```cpp
// Color.h
#pragma once

#include <string>

namespace Visual {

  class Color {

    // Constructors
    public:
      Color(void);
      Color(int red, int green, int blue);

    // Methods
    public:
      void setColor(int red, int green, int blue);

    public:
      int getRed(void);
      int getGreen(void);
      int getBlue(void);

    // Attributes
    private:
      int red = 0;
      int green = 0;
      int blue = 0;

    public:
    std::string getString(void) {
      return "[" + std::to_string(red) + ", "
        + std::to_string(green) + ", "
        + std::to_string(blue) + "]";
    }

  };

};
```

```cpp
// Color.cpp
#include "Color.h"

namespace Visual {

  Color::Color(void) {
  }

  Color::Color(int red, int green, int blue) {
    setColor(red, green, blue);
  }

  void Color::setColor(int red, int green, int blue) {
    this->red = red;
    this->green = green;
    this->blue = blue;
  }

  int Color::getRed(void) {
    return red;
  }

  int Color::getGreen(void) {
    return green;
  }

  int Color::getBlue(void) {
    return blue;
  }

};
```
