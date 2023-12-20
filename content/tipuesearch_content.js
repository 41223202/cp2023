var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n clear \n cd downloads \n cc gnuplot_ex1.c \n ./a.out \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// cc roc_flag.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n clear \n cd downloads \n cc gd_roc_flag.c -lgd -lm \n ./a.out \n \n // https://en.wikipedia.org/wiki/Flag_of_the_United_States\n// https://www.britannica.com/topic/flag-of-the-United-States-of-America\n// 以下為幾乎要繪製完成的美國國旗, 請修改下列原始碼, 令其繪出正確的美國國旗\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n clear \n cd downloads \n cc gd_usa_flag.c -lgd -lm \n ./a.out \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n\n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // 绘制英国国旗\n    draw_uk_flag(img);\n\n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\n\n\nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n\n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n\n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n\n    int x1, y1, x2, y2, x3, y3;\n\n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n\n\n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n\n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n\n  int x1, y1, x2, y2, x3, y3;\n\n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n\n\n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n\n\n  }\n\n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n\n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = 2 * width / 3;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white ;\n    int center_x =  0.5 * width;\n    int center_y =  0.5 * height;\n    int sun_radius = 145 ;\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n\n\n    // 繪製白色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red);\n} \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("hellogd.png", "wb");\n    if (outputFile == NULL) {\n\nfprintf(stderr, "Error opening the output file.\\n");\n\nreturn 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    // 長方形塗色\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);\n    // 橢圓形塗色\n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);\n    // 橢圓形畫線\n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);\n    // 畫直線\n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue);\n\n    // 多邊形畫線\n    gdPoint points[4];\n    points[0].x = (int)width/4;\n    points[0].y = (int)height*3/4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n    gdImagePolygon(img, points, 4, black);\n\n    // 多邊形塗色\n    gdPoint points2[4];\n    points2[0].x = (int)width/3;\n    points2[0].y = (int)height/2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n} \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w13', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Open a file to write displacement and velocity data\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "Failed to create data file.\\n");\n        return 1;\n    }\n\n    // Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n    double x = 0.2;  // Initial displacement\n    double v = 0.0;  // Initial velocity\n    double dt = 0.01; // Time step\n    double t = 0.0;  // Time\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // Close the data file\n    fclose(outputFile);\n\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n    // Close the Gnuplot process\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n', 'tags': '', 'url': 'w13.html'}, {'title': 'ANSIC', 'text': '1. \n #include <stdio.h>\n\nint main() \n{\n    // 声明并初始化字符变量\n    char char1 = \'X\';\n    char char2 = \'M\';\n    char char3 = \'L\';\n\n    // 打印原始和反转字符\n    printf("The reverse of %c%c%c is %c%c%c\\n",\n        char1, char2, char3,\n        char3, char2, char1);\n\n    return(0);\n} \n \n \n 2. \n #include <stdio.h>\n\nint main() {\n    int j, numbers[5], total=0; // 声明循环计数器、一个包含五个数字的数组以及总和变量\n\n    // 提示用户输入五个数字，并将它们存储在数组中\n    printf("\\n輸入第一個數字："); \n    scanf("%d", &numbers[0]);\n    printf("\\n輸入第二個數字："); \n    scanf("%d", &numbers[1]);\n    printf("\\n輸入第三個數字："); \n    scanf("%d", &numbers[2]);\n    printf("\\n輸入第四個數字："); \n    scanf("%d", &numbers[3]);\n    printf("\\n輸入第五個數字："); \n    scanf("%d", &numbers[4]);\n\n    // 通过循环遍历这些数字，找到并计算奇数的总和\n    for(j = 0; j < 5; j++) {\n        if((numbers[j] % 2) != 0) \n        {\n            total += numbers[j];\n        }   \n    }\n\n    // 打印奇數總和\n    printf("\\n所有奇數的總和：%d", total);\n    printf("\\n");\n\n    return 0;\n}\n \n \n \n 11. \n #include <stdio.h>\n\nint main()\n{\n    // 宣告變數和指標\n    int fno, sno, *ptr, *qtr, sum;\n\n    // 提示用戶輸入第一個數字\n    printf("\\n\\n Pointer : Add two numbers :\\n");\n    printf("--------------------------------\\n");\n\n    printf(" 輸入第一個數字 : ");\n    scanf("%d", &fno);\n\n    // 提示用戶輸入第二個數字\n    printf(" 輸入第二個數字 : ");\n    scanf("%d", &sno);\n\n    // 指向第一個數字的指標\n    ptr = &fno;\n\n    // 指向第二個數字的指標\n    qtr = &sno;\n\n    // 計算兩數的總和\n    sum = *ptr + *qtr;\n\n    // 輸出總和\n    printf(" 輸入的兩個數字的總和 : %d\\n\\n", sum);\n\n    return 0;\n} \n \n 12. \n #include <stdio.h>\n\n// 函數原型\nint calculateLength(char*);\n\nvoid main() \n{\n    char str1[25];\n    int l;\n\n    printf("\\n\\n 指針：計算字符串的長度：\\n"); \n    printf("---------------------------------------------------\\n");\n\n    // 輸入一個字符串\n    printf(" 輸入一個字符串：");\n    fgets(str1, sizeof str1, stdin);\n\n    // 計算字符串的長度\n    l = calculateLength(str1);\n\n    // 輸出字符串的長度\n    printf(" 給定字符串 %s 的長度是：%d ", str1, l - 1);\n    printf("\\n\\n");\n}\n\n// 函數，用於計算字符串的長度\nint calculateLength(char* ch)\n{\n    int ctr = 0;\n\n    // 通過迭代字符直到遇到空字符\n    while (*ch != \'\\0\') \n    {\n        ctr++;\n        ch++;\n    }\n\n    return ctr;\n}\n \n \n \n 13. \n # include <stdio.h>\n# include <string.h>\n\nint main()\n{\n    int n, x = 0;\n    \n    printf("\\n\\n 檢查給定數字是否是醜數:\\n");\n    printf("----------------------------------------------------\\n");\n    \n    // 輸入一個整數\n    printf(" 輸入一個整數: ");\n    scanf("%d", &n);\n\n    if (n <= 0) \n    {  \n        printf("請輸入正確的數字.");  \n    }\n    \n    while (n != 1) \n    {  \n        if (n % 5 == 0) \n        {  \n            n /= 5;  \n        } \n        else if (n % 3 == 0) \n        {  \n            n /= 3;  \n        } \n        else if (n % 2 == 0) \n        {  \n            n /= 2;  \n        } \n        else \n        {  \n            printf("它不是一個醜數.\\n"); \n            x = 1;  \n            break;  \n        }  \n    } \n    \n    if (x == 0) \n    { \n        printf("它是一個醜數.\\n");\n    }\n\n    return 0; // 返回 0，表示正常結束程序\n}\n \n \n \n 14. \n #include <stdio.h>  // 包含標準輸入/輸出頭文件。\n\nvoid main()\n{\n    int num1, rem1;  // 声明两个整数变量 \'num1\' 和 \'rem1\'。\n\n    printf("輸入一個整數: ");  // 提示用戶輸入一個整數。\n    scanf("%d", &num1);  // 讀取並將用戶輸入的值存儲在 \'num1\' 中。\n    rem1 = num1 % 2;  // 計算 \'num1\' 除以 2 的餘數。\n    if (rem1 == 0)  // 檢查餘數是否等於 0。\n        printf("%d 是一個偶數\\n", num1);  // 打印一條消息，指示 \'num1\' 是一個偶數。\n    else\n        printf("%d 是一個奇數\\n", num1);  // 打印一條消息，指示 \'num1\' 是一個奇數。\n}\n \n \n \n 15. \n #include <stdio.h>  // 包含標準輸入/輸出頭文件。\n\nvoid main()\n{\n    int co1, co2;  // 声明两个整数变量 \'co1\' 和 \'co2\' 來存儲座標。\n\n    printf("輸入X和Y坐標的值：");  // 提示用戶輸入座標。\n    scanf("%d %d", &co1, &co2);  // 讀取並將用戶輸入的值存儲在 \'co1\' 和 \'co2\' 中。\n\n    if (co1 > 0 && co2 > 0)  // 檢查 \'co1\' 和 \'co2\' 是否都是正數。\n        printf("該座標點（%d,%d）位於第一象限。\\n", co1, co2);  // 打印一條消息，指示該座標位於第一象限。\n    else if (co1 < 0 && co2 > 0)  // 檢查 \'co1\' 是否為負數並且 \'co2\' 是否為正數。\n        printf("該座標點（%d,%d）位於第二象限。\\n", co1, co2);  // 打印一條消息，指示該座標位於第二象限。\n    else if (co1 < 0 && co2 < 0)  // 檢查 \'co1\' 和 \'co2\' 是否都是負數。\n        printf("該座標點（%d, %d）位於第三象限。\\n", co1, co2);  // 打印一條消息，指示該座標位於第三象限。\n    else if (co1 > 0 && co2 < 0)  // 檢查 \'co1\' 是否為正數並且 \'co2\' 是否為負數。\n        printf("該座標點（%d,%d）位於第四象限。\\n", co1, co2);  // 打印一條消息，指示該座標位於第四象限。\n    else if (co1 == 0 && co2 == 0)  // 檢查 \'co1\' 和 \'co2\' 是否都是零。\n        printf("該座標點（%d,%d）位於原點。\\n", co1, co2);  // 打印一條消息，指示該座標位於原點。\n}\n \n \n 16. \n #include <stdio.h>    // 包含標準輸入/輸出頭文件。\n#include <stdlib.h>   // 包含標準庫頭文件。\n#include <time.h>     // 包含時間頭文件，用於生成隨機數。\n\nint main()           // 主函數的開始。\n{\n    int number, input;   // 声明兩個整數變量 \'number\' 和 \'input\'。\n\n    srand(time(NULL));   // 使用當前時間初始化隨機種子。\n\n    number = rand() % 10 + 1;   // 生成一個介於1到10之間的隨機數並將其存儲在 \'number\' 中。\n\n    do {   // 開始一個 do-while 循環。\n        printf("\\n猜數字 (1 到 10): ");   // 打印一條消息，提示用戶猜數字。\n        scanf("%d", &input);    // 讀取用戶的輸入並將其存儲在 \'input\' 中。\n\n        if (number > input)   // 如果隨機數大於用戶的輸入。\n            printf("數字較大\\n");   // 打印一條消息，指示數字較大。\n\n    } while (number != input);   // 只要用戶的輸入不等於隨機數，就繼續循環。\n\n    printf("答對了！\\n\\n");   // 打印一條消息，指示用戶猜對了。\n\n    return 0;   // 返回 0，表示程序運行成功。\n}   // 主函數的結尾。\n \n \n 17. \n #include <time.h>    // 包含時間頭文件。\n#include <stdio.h>   // 包含標準輸入/輸出頭文件。\n#include <stdlib.h>  // 包含標準庫頭文件。\n\nint main(void)\n{\n    time_t cur_time;      // 声明一個 time_t 類型的變量 \'cur_time\' 用於存儲當前時間。\n    char* cur_t_string;   // 声明一個字符指針 \'cur_t_string\' 用於存儲轉換後的時間字符串。\n\n    cur_time = time(NULL);   // 獲取當前的日期和時間。\n    if (cur_time == ((time_t)-1))\n    {\n        (void) fprintf(stderr, "無法獲取當前日期和時間。\\n");\n        exit(EXIT_FAILURE);   // 如果獲取失敗，輸出錯誤消息並退出程序。\n    }\n\n    cur_t_string = ctime(&cur_time);   // 將時間轉換為本地時間格式的字符串。\n    if (cur_t_string == NULL)\n    {\n        (void) fprintf(stderr, "無法轉換當前日期和時間。\\n");\n        exit(EXIT_FAILURE);   // 如果轉換失敗，輸出錯誤消息並退出程序。\n    }\n\n    (void) printf("\\n 當前時間是：%s \\n", cur_t_string);   // 打印當前的日期和時間字符串。\n\n    exit(EXIT_SUCCESS);   // 退出程序，表示成功執行。\n}\n \n \n 18. \n #include <stdio.h>\n#include <stdlib.h>\n\nvoid main()\n{\n    int fno, sno, *ptr1 = &fno, *ptr2 = &sno;\n\n    printf("\\n\\n 指針：找出兩個數字之間的最大值：\\n");\n    printf("------------------------------------------------------------\\n");\n\n    printf(" 輸入第一個數字：");\n    scanf("%d", ptr1);\n    printf(" 輸入第二個數字：");\n    scanf("%d", ptr2);\n\n    if (*ptr1 > *ptr2)\n    {\n        printf("\\n\\n %d 是最大的數字。\\n\\n", *ptr1);\n    }\n    else\n    {\n        printf("\\n\\n %d 是最大的數字。\\n\\n", *ptr2);\n    }\n}\n \n \n 19. \n #define __STDC_WANT_LIB_EXT1__ 1\n#include <stdio.h>\n#include <time.h>\n\nint main(void)\n{\n    time_t t = time(NULL);  // 獲取當前時間的秒數，存儲在變數 \'t\' 中。\n\n    printf("\\n 表達為協調世界時的日曆時間是：");\n    printf("\\n UTC:   %s", asctime(gmtime(&t)));  // 使用 \'gmtime\' 將時間轉換為 UTC 時間，然後使用 \'asctime\' 打印。\n\n    printf(" 本地時間: %s\\n", asctime(localtime(&t)));  // 使用 \'localtime\' 將時間轉換為本地時間，然後使用 \'asctime\' 打印。\n\n#ifdef __STDC_LIB_EXT1__\n    struct tm buf;\n    char str[26];\n\n    asctime_s(str, sizeof str, gmtime_s(&t, &buf));  // 安全版本：使用 \'gmtime_s\' 將時間轉換為 UTC 時間，然後使用 \'asctime_s\' 打印。\n    printf(" UTC:   %s", str);\n\n    asctime_s(str, sizeof str, localtime_s(&t, &buf));  // 安全版本：使用 \'localtime_s\' 將時間轉換為本地時間，然後使用 \'asctime_s\' 打印。\n    printf(" 本地時間: %s", str);\n#endif\n}\n \n \n 20. \n #define __STDC_WANT_LIB_EXT1__ 1\n#include <stdio.h>\n#include <time.h>\n\nint main(void)\n{\n    time_t t = time(NULL);  // 獲取當前時間的秒數，存儲在變數 \'t\' 中。\n\n    printf("\\n 表達為協調世界時的日曆時間是：");\n    printf("\\n UTC:   %s", asctime(gmtime(&t)));  // 使用 \'gmtime\' 將時間轉換為 UTC 時間，然後使用 \'asctime\' 打印。\n\n    printf(" 本地時間: %s\\n", asctime(localtime(&t)));  // 使用 \'localtime\' 將時間轉換為本地時間，然後使用 \'asctime\' 打印。\n\n#ifdef __STDC_LIB_EXT1__\n    struct tm buf;\n    char str[26];\n\n    asctime_s(str, sizeof str, gmtime_s(&t, &buf));  // 安全版本：使用 \'gmtime_s\' 將時間轉換為 UTC 時間，然後使用 \'asctime_s\' 打印。\n    printf(" UTC:   %s", str);\n\n    asctime_s(str, sizeof str, localtime_s(&t, &buf));  // 安全版本：使用 \'localtime_s\' 將時間轉換為本地時間，然後使用 \'asctime_s\' 打印。\n    printf(" 本地時間: %s", str);\n#endif\n}\n \n', 'tags': '', 'url': 'ANSIC.html'}, {'title': 'c_ex', 'text': '', 'tags': '', 'url': 'c_ex.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};