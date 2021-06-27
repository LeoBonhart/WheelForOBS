# Steering wheel for OBS

> Supported only g29
> I don't have other steering wheel for testing
> It may work, but it's not certain

### How to add a steering wheel to OBS

1. You need to download the compiled site [Archive link](https://drive.google.com/file/d/1QwgIVLdMNGgr6gxakMy3QNxs386YUJqg/view?usp=sharing)
2. Unpack the archive and place the folder in a convenient place
3. Open in the unzipped folder index.html with a text editor
4. Specify the local path to the site
![image][image1]
5. Add local site to OBS
![image][add1]
![image][add2]

Next, you can already configure the steering wheel window in OBS

You can display the steering wheel and pedals separately, for this you need to disable the display of the pedals

```html
data-pedals-show="false"
```

or the steering wheel

```html
data-wheel-show="false"
```

in the base element in index.html
![image][image2]

Added a style for displaying pedals at the speedometer in the form of a circle for **`Forza Horizon 4`**. To enable this style, you need to specify

```html
data-pedals-style="forza4"
```

in the base element in index.html
![image][image3]

> This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

[image1]: ../path.jpg
[add1]: add1.png
[add2]: add2.png
[image2]: ../15a70e71fd.png
[image3]: ../a13b5c65d4.png
