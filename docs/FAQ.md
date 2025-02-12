# FAQ

Общая информация, популярные вопросы и ответы на них.

## О системе

Walksnail Avatar - цифровая FPV система, выпущенная в 2022 году, конкурент [HDZero](hdzero.ru) и [DJI FPV](https://www.djifpv.ru). Электронику для этой системы делает [Walksnail (они же Caddx FPV)](https://caddxfpv.com/collections/walksnail-avatar-system) и [Fatshark HD](https://www.fatshark.com).


## FAQ из чата

B: Какой юнит и камеру мне взять (сравнение и эволюция системы)?

О: https://caddxfpv.com/blogs/news/the-evolution-of-walksnail-avatar-systems-products

На данный момент все камеры и юниты между собой совместимы:

* 1s lite (1-3s) для вупов зубочисток (по сути это раздетый v3 с облегченный  нано камерой. 500mw только 25х25крепление. Для 1с вупов подключаем на пэды входа питания (акб) в регулятор. для 2+s - через бек.

* V2/v2dual подойдет для фристайл, синевупов, и дальнолетов.1200mw, 20х20 м2 на радиаторе и 25х25 сквозное крепление. Подключаем через внешний бек или на батку 4-6s (на свой страх и риск и только с конденцатором lowesr)

* v3 для гонок и легких сетапов зубочисток 3.5 фристайл квадов. 500mw. Крепление 25х25, 20х20 на радиаторе м3. Подключаем через внешний бек. или если нет места через бек пк (не рекомендуется и тоже на свой страх и риск)

* MoonlightKit камера с 4к записью на юнит.  Подключать только через бек 12в ниже скачки и перегрев бека в юните

---

В: Компьютер не видит юнит улитки?

О: юнит по usb функицонирует только при подключении аккумулятора (lipo) к бпла (квад\самоль). v2 юнит к компу подключается только через type-c на usb-a.

---

B: Какой прошивкой что прошивать?

О: в наименовании прошивки есть префикс и версия прошивки (сборки).

* "Avatar_Gnd" - очки v1

* "AvatarMini_Gnd" - шлем  

* "AvatarSE_Gnd" - Vrx (нашлепка)

* "Avatar_Sky" - юнит (v1,v2,v3,1s)

---

B: Как вернутся на старую прошивку и где ее взять?

О: Переименовать файл старой прошивки так, чтобы _номер версии_ стал **больше**, чем у текущей залитой прошивки. Например, если в юнит залита прошивка Avatar_Sky_**34.40.15**.img, то файл **старой** прошивки нужно переименовать в Avatar_Sky_**34.40.25**.img

Старые\бета прошивки: https://github.com/D3VL/Avatar-Firmware-Updates/tree/main/_firmwares

Актуальные прошивки на сайте каддикс: https://caddxfpv.com/pages/download

---

B: Как добавить osd в видео запись с очков\vrx

О: https://github.com/avsaase/walksnail-osd-tool/releases

для добавления нужно выбрать:

- видео файл .mp4, 
- osd с очков .srt, 
- osd с полетного контроллера .osd
- файл шрифта .png где в названии 24 это 720p 36 это 1080p (см. ниже)

---

B: Где взять шрифты для осд?

О: https://sites.google.com/view/sneaky-fpv/home (@woodlemax)

---

В: Как восстановить видео с юнита, запись которого не корректно завершена?

О: https://github.com/anthwlock/untrunc

Под windows https://github.com/anthwlock/untrunc/releases 
выбираем "reference file" не битое видео с юнита, truncate file - поврежденное. нажимаем repair. в результате получаем видео с постфиксом _fixed (@woodlemax)

Под мак простой путь - использовать вирутальную машину parralels на win11 arm и запускать win сборку. Сложный - собирать самому из исходников репозитория.

---

В: Как стабилизировать видео для всех камер Walksnail (даже без встроенной гиры).

О: Использовать встренные или внешний логер для записи гироданных с пк.  
- Для настройки логера в БФ используем пресет "GyroFlow".  
- Указать наклон камеры относительно пк (гиры) : 15-20гр в gyroflow 
- Если не стабится двигаем sample rate на одну ступеньку.  (set blackbox_sample_rate = 1/16 на 1/8 (@RybakovPavel)

---

## FAQ с дискорда 

В: Экраны очков Walksnail имеют формат 4:3 или режим 4:3 обрезает их?

О: Экраны очков имеют формат 16:9, как и датчики изображения на современных камерах, поэтому при использовании режима 4:3 видеоизображение обрезается.

---

В: Нужно ли перезагружать очки после обновления прошивки?

О: Это больше не требуется.

---

В: Как называются различные прошивки и что они означают?

О: SE - это прошивка для VRX, Sky - для VTX, а GND - для очков/VRX.

---

В: Какого размера входной разъем постоянного тока?

О: Это бочкообразный разъем 5,5 / 2,1 мм.

---

В: Какого размера разъем питания VTX?

О: Это 6-контактный разъем JST SH 1 мм.

---

В: Какой тип разъема видеовыхода установлен на VRX?

О: Это выход Mini HDMI. (отредактировано)

---

В: Можно ли отключить экранное меню? 

О: Эта функция была добавлена в прошивку версии V31.36.8. Обновитесь до этой прошивки (или более поздней), чтобы иметь возможность отключать встроенный экранный дисплей, а также дисплейный порт MSP.

---

В: Может ли Avatar работать со скоростью 120 кадров в секунду в очках. 

О: нет

---

В: Какая система Avatar - 100 или 120fps? 

О: - 100fps максимум. 

---

В: Будет ли режим 1080p 120fps. 

О : Нет, требуется аппаратное обновление.

---

В: Какой тип разъемов у нового V2/V3 VTX?

О: Используется разъем ST0.8 HSG 6P /  ST0.8 HSG 4P (V3 vtx)

---
