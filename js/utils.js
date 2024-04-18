class Object {
    constructor(id = 0, name = "", trans_vec=null, rotate_vec=null, scale_vec=null, shear_vec=null){
        this.id = id;
        this.name = name;
        this.trans_vec = trans_vec;
        this.rotate_vec = rotate_vec;
        this.scale_vec = scale_vec;
        this.shear_vec = shear_vec;
        
        this.VertexPositionBuffer;
        this.VertexNormalBuffer;
        this.VertexFrontColorBuffer;

        this.mvMatrix = mat4.create();
        this.pMatrix = mat4.create();
    }

    set_trans_vec(trans_vec) {
        this.trans_vec = trans_vec;
      }
    
    set_rotate_vec(rotate_vec) {
        this.rotate_vec = rotate_vec;
      }
    
    set_scale_vec(scale_vec) {
        this.scale_vec = scale_vec;
      }
    
    set_shear_vec(shear_vec) {
        this.shear_vec = shear_vec;
      }
    
    
    translation() {
        mat4.translate(this.mvMatrix, this.trans_vec);
      }
    
    rotation() {
        var rx = degToRad(this.rotate_vec[0]);
        mat4.rotate(this.mvMatrix, rx, [1, 0, 0]);
    
        var ry = degToRad(this.rotate_vec[1]);
        mat4.rotate(this.mvMatrix, ry, [0, 1, 0]);
    
        var rz = degToRad(this.rotate_vec[2]);
        mat4.rotate(this.mvMatrix, rz, [0, 0, 1]);
      }
    
    scale() {
        mat4.scale(this.mvMatrix, this.scale_vec);
      }
    
    shear() {
        var cotx = 1 / Math.tan(degToRad(this.shear_vec[0]));
        var coty = 1 / Math.tan(degToRad(this.shear_vec[1]));
        var cotz = 1 / Math.tan(degToRad(this.shear_vec[2]));
        mat4.multiply(
          this.mvMatrix,
          mat4.create([1, 0, cotz, 0, cotx, 1, 0, 0, 0, coty, 1, 0, 0, 0, 0, 1])
        );
      }
}