# Руль для OBS

> Поддерживается только g29
> Других рулей для тестирования у меня нет
> Возможно работать будет, но это не точно

### Как добавить руль в OBS

1. Нужно скачать скомпилированный сайт [Ссылка на архив](https://drive.google.com/file/d/1QwgIVLdMNGgr6gxakMy3QNxs386YUJqg/view?usp=sharing)
2. Распаковать архив и поместить папку в удобное место
3. Открыть в разархивированной папке index.html с помощью текстового редактора
4. Указать локальный путь к сайту
![image][image1]
5. Добавить локальный сайт в OBS
![image][add1]
![image][add2]

Далее уже можно настроить окно руля в OBS

Можно отдельно отображать руль и педали, для этого нужно в index.html отключить отображение педалей

```html
data-pedals-show="false"
```

или руля

```html
data-wheel-show="false"
```

в елементе base
![image][image2]

Добавлен стиль отображения педалей у спидометра в виде круга для Forza Horizon 4. Для включения этого стиля нужно указать

```html
data-pedals-style="forza4"
```

в index.html в елементе base
![image][image3]

> Этот проект был создан с помощью [Angular CLI](https://github.com/angular/angular-cli) версия 11.2.5.

[image1]: ../path.jpg
[add1]: add1.png
[add2]: add2.png
[image2]: ../15a70e71fd.png
[image3]: ../a13b5c65d4.png
