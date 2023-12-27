#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_exam_flag(gdImagePtr img);
void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);

int main() {
    // width 3: height 2
    int width = 1200;
    int height = (int)(width*2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_exam_flag(img);

    FILE *outputFile = fopen("./exam_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_exam_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, white, blue;
    int center_x = (int)(width/4);
    int center_y = (int)(height/4);
    int sun_radius = (int)(width/8);
    int lineColor = gdImageColorAllocate(img, 255, 255, 255);

  // 畫一條線
    int x1 = 429;
    int y1 = 125;
    int x2 = 170;
    int y2 = 274;

    int x3 = 279;
    int y3 = 165;
    int x4 = 170;
    int y4 = 274;

    int x5 = 279;
    int y5 = 165;
    int x6 = 429;
    int y6 = 125;

    // Colors for the flag
    red = gdImageColorAllocate(img, 242, 0, 0); // Red color
    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes
    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue

    // 繪製紅色矩形區域
    gdImageFilledRectangle(img, 0, 0, width, height, red);

    // 繪製藍色矩形區域
    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);

    gdImageLine(img, x1, y1, x2, y2, lineColor);

    gdImageLine(img, x3, y3, x4, y4, lineColor);

    gdImageLine(img, x5, y5, x6, y6, lineColor);


    return 0;
}