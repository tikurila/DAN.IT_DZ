const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync");

const scripts = (cb) => {
   src("./src/scripts/*.js")
      .pipe(uglify())
      .pipe(dest("./dist/js"))
      .pipe(
         browserSync.reload({
            stream: true,
         })
      );
   cb();
};

exports.scripts = scripts;
