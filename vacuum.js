class Vacuum {
  constructor(height, width, currentPosition) {
    this.height = (height - 1);
    this.width = (width - 1);
    this.currentPosition = currentPosition;
  };

  /*
  isValid(direction) {
    if(direction == 'N') {
      if((this.currentPosition[1] + 1) <= this.height) {
        return true
      }
    } else if(direction == 'S') {
      if((this.currentPosition[1] - 1) >= 0) {
        return true
      }
    } else if(direction == 'W') {
      if((this.currentPosition[0] - 1) >= 0) {
        return true
      }
    } else if(direction == 'E') {
      if((this.currentPosition[0] + 1) <= this.width) {
        return true
      }
    }
  }
  */

  move(direction) {
    if(direction == 'N') {
      if((this.currentPosition[1] + 1) <= this.height) {
        this.currentPosition[1] ++;
      }
    } else if(direction == 'S') {
      if((this.currentPosition[1] - 1) >= 0) {
        this.currentPosition[1] --;
      }
    } else if(direction == 'W') {
      if((this.currentPosition[0] - 1) >= 0) {
        this.currentPosition[0] --;
      }
    } else if(direction == 'E') {
      if((this.currentPosition[0] + 1) <= this.width) {
        this.currentPosition[0] ++;
      }
    }
  }
}

module.exports = Vacuum;