let sketchname = 'sketch-1'

let sketch = (p) => {
  let ob = document.getElementById(sketchname); // Gets the size of the div 
  p.setup = () => {
    p.createCanvas(ob.clientWidth, ob.clientHeight);
    p.background(0);
  }

  p.draw = () => {
    p.background(0);


    p.rectMode(p.CENTER);
    p.translate(ob.clientWidth / 2, ob.clientHeight / 2);

    for (let i = 0; i < 5; i++) {
      p.translate(p5.Vector.fromAngle(p.millis() / 500, ob.clientWidth / 25));
      p.fill(i * 20)
      p.rect(0, 0, ob.clientWidth / 10, ob.clientHeight / 10);
    }
    for (let i = 0; i < 5; i++) {
      p.translate(p5.Vector.fromAngle(p.millis() * 2 / 500, ob.clientWidth / 25));
      p.fill(100 + (i * 20))
      p.rect(0, 0, ob.clientWidth / 10, ob.clientHeight / 10);
    }
    for (let i = 0; i < 5; i++) {
      p.translate(p5.Vector.fromAngle(p.millis() / 500, ob.clientWidth / 25));
      p.fill(200 + (i * 20))
      p.rect(0, 0, ob.clientWidth / 10, ob.clientHeight / 10);
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(ob.clientWidth, ob.clientHeight);
  }
};
new p5(sketch, sketchname);

//---------------------------------------------------
sketchname = 'sketch-2';

let total = 200;
let angle = 0;
let path = [];
let factor = 23.22300000000517;

sketch = (p) => {
  let ob = document.getElementById(sketchname);
  let joker;
  let x = 0;


  p.setup = () => {
    p.createCanvas(ob.clientWidth, ob.clientHeight);

  }

  p.draw = () => {
    
    factor = p.map(p.mouseX, 0, ob.clientWidth, 25, 200, true);;
    p.background(0);
    p.translate((ob.clientWidth / 2), ob.clientHeight / 2);
    p.translate(p5.Vector.fromAngle(p.millis() / 500, ob.clientWidth / 25));
    p.stroke("#ff0000"); p.strokeWeight(2);
    cardioid(0, 0, ob.clientWidth / 2, factor);
  }
  p.windowResized = () => {
    p.resizeCanvas(ob.clientWidth, ob.clientHeight);
  }
  function cardioid(tX, tY, r, f) {
    p.noFill();
    p.push();
    p.strokeWeight(1);
    for (let i = 0; i < total; i++) {
      let num = 360 / total;
      let x = p.cos(angle + num * i * p.PI / 180) * r;
      let y = p.sin(angle + num * i * p.PI / 180) * r;
      p.point(x + tX, y + tY);
      let v = p.createVector(x + tX, y + tY);
      path[i] = v;
    }
    p.pop();
    for (let i = 0; i < total; i++) {
      let a = i;
      let b = p.floor(i * f);

      p.line(path[a].x, path[a].y, path[b % total].x, path[b % total].y)
    }
  }
};
new p5(sketch, sketchname);

//----------------------------------------------

// sketchname = 'sketch-3';
// sketch = (p) => {
//   let ob = document.getElementById(sketchname);
//   let total = 3; let angle = 0; let r;
//   let b = 0.03; let c = 0;
//   p.setup = () => {
//     p.createCanvas(ob.clientWidth, ob.clientHeight);
//     r = ob.clientHeight / 2.5;

//   }
//   p.draw = () => {
//     p.background(0);
//     p.translate(ob.clientHeight / 2, ob.clientHeight / 2);
//     p.rotate(p.PI / 3.2)
//     p.stroke(255); p.strokeWeight(1);

//     let path = []; p.noFill();
//     star(0, 0, 10, 30, 5);

//     for (let i = 0; i < total; i++) {
//       let num = 360 / total;
//       let x = p.cos(angle + num * i * p.PI / 180) * r;
//       let y = p.sin(angle + num * i * p.PI / 180) * r;
//       // point(x,y);
//       //strokeWeight(1);
//       star(x, y, 20, 50, i + 5 % 15);
//       let v = p.createVector(x, y)
//       path[i] = v;
//       // }
//       for (let j = 0; j < path.length - 1; j++) {
//         for (let i = 0; i < path.length - 1; i++) {
//           let t = i;
//           p.strokeWeight(0.4);

//           p.stroke('rgb(100%,100%,100%)');
//           rotat(path[j].x, path[j].y, path[i + 1].x, path[i + 1].y, c);
//         }
//       }
//     }
//     if (total <= 13) {
//       total = total + b;
//     }
//     c += 0.04;

//   }

//   p.windowResized = () => {
//     p.resizeCanvas(ob.clientWidth, ob.clientHeight);
//   }


// function star(x, y, radius1, radius2, npoints) {
//   p.strokeWeight(1);
//   p.stroke('rgb(100%,100%,0%)');
 
//   let angle = p.TWO_PI / npoints;
//   let halfAngle = angle / 2.0;
//   p.beginShape();
//   for (let a = 0; a < p.TWO_PI; a += angle) {
//     let sx = x + p.cos(a) * radius2;
//     let sy = y + p.sin(a) * radius2;
//     p.vertex(sx, sy);
//     sx = x + p.cos(a + halfAngle) * radius1;
//     sy = y + p.sin(a + halfAngle) * radius1;
//     p.vertex(sx, sy);
//   }
//   p.endShape(p.CLOSE);
// }

//   function rotat(x1,y1, x2,y2, angle) {//angle in radians
//     let a = [];
//     let b = [];
//     let angle_degrees = angle;
//     // angle_radians = angle_degrees*PI/180; //to turn to degrees
//     a[0]= x1;
//     a[1]= y1;
//     b[0]= x2;
//     b[1]= y2;                       
//     // a and b are arrays of length 2 with the x, y coordinate of
//     // your segments extreme points with the form [x, y]

//     midpoint = [
//         (a[0] + b[0])/2,
//         (a[1] + b[1])/2
//     ]

//     // Make the midpoint the origin
//     a_mid = [
//         a[0] - midpoint[0],
//         a[1] - midpoint[1]
//     ]
//     b_mid = [
//         b[0] - midpoint[0],
//         b[1] - midpoint[1]
//     ]

//     // Use the rotation matrix from the paper you mentioned
//     a_rotated = [
//         p.cos(angle)*a_mid[0] - p.sin(angle)*a_mid[1],
//         p.sin(angle)*a_mid[0] + p.cos(angle)*a_mid[1]
//     ]
//     b_rotated = [
//         p.cos(angle)*b_mid[0] - p.sin(angle)*b_mid[1],
//         p.sin(angle)*b_mid[0] + p.cos(angle)*b_mid[1]
//     ]

//     // Then add the midpoint coordinates to return to previous origin
//     a_rotated[0] = a_rotated[0] + midpoint[0]
//     a_rotated[1] = a_rotated[1] + midpoint[1]
//     b_rotated[0] = b_rotated[0] + midpoint[0]
//     b_rotated[1] = b_rotated[1] + midpoint[1]

//     // And the rotation is now done
//     //return [a_rotated, b_rotated]
//   	p.line(a_rotated[0],a_rotated[1],b_rotated[0],b_rotated[1])
		
// }


// };
// new p5(sketch, sketchname);
