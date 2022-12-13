TR
======

Projemi geliştirirken [https://beta.openai.com/overview] linkinden faydalandım. Kullanıcı görmek istediği fotoğrafı betimleyecek şekilde girer ve ardından seçmiş olduğu fotoğraf sayısı kadar fotoğrafın ekranda gösterilmesi sağlanmaktadır. Girilen metnin çevirisini yapabilmek için de [https://rapidapi.com/gatzuma/api/deep-translate1/] linkinden faydalandım.

Projemde bulunan [Translation.js](https://github.com/ahmetkanbaz/DALL_E_React_App/blob/main/src/Components/Translation/Translation.js) component'ındaki *Your Keys.* yazan kısımlara [çeviri](https://rapidapi.com/gatzuma/api/deep-translate1/) linkinde size ait olan API anahtarları ile değiştirmeniz gerekmektedir. Aynı zamanda [GetImages.js](https://github.com/ahmetkanbaz/DALL_E_React_App/blob/main/src/Components/Dall_E/GetImages.js) component'ındaki *Your API Key.* yazan kısma [Image Generator](https://beta.openai.com/docs/guides/images/introduction) linkinden kendinize ait API anahtarı oluşturarak değiştirmelisiniz.

Projemi,
- [React Hooks](https://www.w3schools.com/react/react_hooks.asp),
- [API'den veri çekme](https://www.w3schools.com/jsref/api_fetch.asp),
- [bootstrap](https://react-bootstrap.github.io/getting-started/introduction),
- [reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)

kullanarak geliştirdim.

Projemle ilgili ekran görüntüleri aşağıda görüntülenmektedir.

EN
======
I used the [https://beta.openai.com/overview] link while developing my project. The user enters the photo he wants to see in a way that describes it and then, it is ensured that as many photos as the selected number of photos are displayed on the screen. I used the link [https://rapidapi.com/gatzuma/api/deep-translate1/] to translate the entered text.

*Your Keys.* in [Translation.js](https://github.com/ahmetkanbaz/DALL_E_React_App/blob/main/src/Components/Translation/Translation.js) component in my project. You need to replace the parts written in the [translation](https://rapidapi.com/gatzuma/api/deep-translate1/) link with the API keys that belong to you. Also, *Your API Key.* in [GetImages.js](https://github.com/ahmetkanbaz/DALL_E_React_App/blob/main/src/Components/Dall_E/GetImages.js) component. You should change it by creating your own API key from the [Image Generator](https://beta.openai.com/docs/guides/images/introduction) link in the section that says.

My project,
- [React Hooks](https://www.w3schools.com/react/react_hooks.asp),
- [Pulling data from API](https://www.w3schools.com/jsref/api_fetch.asp),
- [bootstrap](https://react-bootstrap.github.io/getting-started/introduction),
- [reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)

I developed using.

Screenshots of my project are displayed below.



**TR:** Uygulama ilk çalıştırıldığında görünen ekrandır.

**EN:** This is the screen that appears when the application is first run.
![Dall_E_1](https://user-images.githubusercontent.com/106634419/207445573-a8e5052e-40c9-421c-87b0-6d9f354d647e.png)


**TR:** Kullanıcı tarafından herhangi bir metin girildiğinde ve görüntülenmek istenen fotoğrafların sayısı seçildiğinde fotoğraflar alınana kadar *yükleme animasyonu* gösterilmektedir.

**EN:** *Loading animation* is shown until the photos are taken when any text is entered by the user and the number of photos to be viewed is selected.
![Dall_E_2](https://user-images.githubusercontent.com/106634419/207446279-30fba2a2-5717-4425-9f79-8478b6b937fd.png)


**TR:** Fotoğraflar API'den alındığında kullanıcıya gösterilmektedir.

**EN:** Photos are shown to user when retrieved from API.
![Dall_E_3](https://user-images.githubusercontent.com/106634419/207446315-529b50d3-f3d2-4bcd-ba73-b92b93b54c8a.png)



![Dall_E_4](https://user-images.githubusercontent.com/106634419/207446331-dc8dd7c1-a2e3-4c9f-bba9-2296971f3291.png)



![Dall_E_5](https://user-images.githubusercontent.com/106634419/207446367-bd27b8d6-29cf-47e2-b7bf-78bc25dac3db.png)



![Dall_E_6](https://user-images.githubusercontent.com/106634419/207446384-934a842d-168b-4648-8696-b660153aef9b.png)
