import elkor from '../assets/images/elkor.png';
import book from '../assets/images/book.jpg';
import second from '../assets/images/second.png';
import eighth from '../assets/images/eighth.jpg';
import gallery1 from '../assets/gallery/1.jpg';
import gallery2 from '../assets/gallery/2.jpg';
import gallery3 from '../assets/gallery/3.jpg';
import gallery4 from '../assets/gallery/4.jpg';

const initialState = {
    locale: sessionStorage.getItem('locale') || 'ru',
    title: {
        ru: 'Future Live! Рига',
        lv: 'Future Live! Rīga',
    },
    menu: [
        {
            title: {
                ru: 'О выставке',
                lv: 'Par izstādi',
            },
        },
        {
            title: {
                ru: 'Билеты',
                lv: 'Biļetes',
            },
        },
        {
            title: {
                ru: 'Информация',
                lv: 'Informācija',
            },
        },
        {
            title: {
                ru: 'Объекты',
                lv: 'Objekti',
            },
        },
        {
            title: {
                ru: 'Контакты',
                lv: 'Kontakti',
            },
        },
        {
            title: {
                ru: 'Партнеры',
                lv: 'Partneri',
            },
        }
    ],
    socials: [
        {
            title: 'Facebook',
        },
        {
            title: 'Instagram',
        },
        {
            title: 'YouTube',
        },
        {
            title: 'mail',
        }
    ],
    nextLanguage: {
        ru: {
            title: 'LAT',
            code: 'lv',
        },
        lv: {
            title: 'РУС',
            code: 'ru',
        },
    },
    content: {
        first: {
            title: {
                ru: 'Интерактивная выставка для всей семьи!',
                lv: 'Interaktīva izstāde visai ģimenei!',
            },
            elkor,
            submit: {
                ru: 'Купить билеты',
                lv: 'Pirkt biļeti',
            },
        },
        second: {
            title: {
                ru: 'Вы готовы совершить межгалактическое путешествие?',
                lv: 'Vai esat gatavi doties starpgalaktiskā ceļojumā?',
            },
            content: {
                ru: 'Вы попадете в удивительный мир, населенный неземными существами, волшебными цветами и инопланетными растениями, с которыми с удовольствием будут взаимодействовать как дети, так и взрослые.',
                lv: 'Jūs nokļūsiet neparastā pasaulē, kur mīt citplanētieši, fantastiskas puķes un svešzemju augi, ko būs aizraujoši iepazīt gan bērniem, gan pieaugušajiem.',
            },
            image: second,
        },
        third: {
            title: {
                ru: 'О выставке future LIVE!',
                lv: 'Par izstādi future LIVE!',
            },
            content: {
                ru: `<p>С 15 декабря 2017 года, в Elkor Plaza в новом выставочном пространстве LEVEL8 откроется международная мультимедийная выставка для всей семьи <b>future LIVE!</b>.</p>
<p>На выставке <b>future LIVE!</b> мы объединили самые современные интерактивные технологии в виде арт объектов и арт инсталляций, с которыми можно и нужно взаимодействовать. 3d mapping, проекционный интерактив, виртуальная и дополненная реальность - эти технологии мы используем, чтобы объединить гостей выставки в едином креативном порыве.</p>`,
                lv: `<p>No 2017. gada 15. decembra jaunajā Elkor Plaza izstāžu telpā LEVEL8 tiks atvērta starptautiska multimediju izstāde visai ģimenei <b>future LIVE!</b>.</p>
<p>Izstādē "Nākotne tagad!" esam apvienojuši vismodernākās interaktīvās tehnoloģijas mākslas objektos un instalācijās, ar kurām iespējams un vēlams mijiedarboties. 3D modelēšana, interaktīvās projekcijas, virtuālā un papildinātā realitāte – izmantojam šīs tehnoloģijas, lai dotu izstādes viesiem vienotu radošu impulsu.</p>`,
            },
            book,
        },
        fourth: {
            gallery: [
                {
                    src: gallery1,
                },
                {
                    src: gallery2,
                },
                {
                    src: gallery3,
                },
                {
                    src: gallery4,
                },
            ],
        },
        fifth: {
            title: {
                ru: 'Объекты',
                lv: 'Objekti',
            },
        },
        sixth: {
            title: {
                ru: 'Билеты',
                lv: 'Biļetes',
            },
            content: {
                ru: 'Билеты на выставку вы можете приобрести на входе в выставочное пространство.',
                lv: 'Biļetes varēsiet iegādāties kasē pie ieejas izstāžu zālē',
            },
            submit: {
                ru: 'Купить билеты',
                lv: 'Pirkt biļeti',
            },
            prices: [
                {
                    title: {
                        ru: 'По будням',
                        lv: 'Darbdienās',
                    },
                    children: [
                        {
                            title: {
                                ru: 'Взрослые',
                                lv: 'Pieaugušajiem',
                            },
                            cost: '12 EUR',
                        },
                        {
                            title: {
                                ru: 'Дети (3-15)',
                                lv: 'Bērniem (3-15)',
                            },
                            cost: '8 EUR',
                        },
                        {
                            title: {
                                ru: 'Студенты / Пенсионеры',
                                lv: 'Studentiem/Pensionāriem',
                            },
                            cost: '10 EUR',
                        },
                        {
                            title: {
                                ru: 'Семья (2 ребенка + 1 взрослый)',
                                lv: 'Ģimenei (2 bērni + 1 pieaugušais)',
                            },
                            cost: '22 EUR',
                        },
                        {
                            title: {
                                ru: 'Семья (2 взрослых + 1 ребенок)',
                                lv: 'Ģimenei (2 pieaug + 1 bērns)',
                            },
                            cost: '26 EUR',
                        },
                        {
                            title: {
                                ru: 'Семья (2 взрослых + 2 ребенка)',
                                lv: 'Ģimenei (2 pieaugušie + 2 bērni)',
                            },
                            cost: '34 EUR',
                        },
                        {
                            title: {
                                ru: 'Группы (от 10)',
                                lv: 'Bērnu grupai (10+)',
                            },
                            cost: '6 EUR',
                        },
                    ],
                },
                {
                    title: {
                        ru: 'По выходным',
                        lv: 'Brīvdienās',
                    },
                    children: [
                        {
                            title: {
                                ru: 'Взрослые',
                                lv: 'Pieaugušajiem',
                            },
                            cost: '15 EUR',
                        },
                        {
                            title: {
                                ru: 'Дети (3-15)',
                                lv: 'Bērniem (3-15)',
                            },
                            cost: '10 EUR',
                        },
                        {
                            title: {
                                ru: 'Студенты / Пенсионеры',
                                lv: 'Studentiem/Pensionāriem',
                            },
                            cost: '12 EUR',
                        },
                        {
                            title: {
                                ru: 'Семья (2 ребенка + 1 взрослый)',
                                lv: 'Ģimenei (2 bērni + 1 pieaugušais)',
                            },
                            cost: '30 EUR',
                        },
                        {
                            title: {
                                ru: 'Семья (2 взрослых + 1 ребенок)',
                                lv: 'Ģimenei (2 pieaug + 1 bērns)',
                            },
                            cost: '35 EUR',
                        },
                        {
                            title: {
                                ru: 'Семья (2 взрослых + 2 ребенка)',
                                lv: 'Ģimenei (2 pieaugušie + 2 bērni)',
                            },
                            cost: '42 EUR',
                        },
                        {
                            title: {
                                ru: 'Группы (от 10)',
                                lv: 'Bērnu grupai (10+)',
                            },
                            cost: '8 EUR',
                        },
                    ],
                },
            ],
        },
        seventh: {
            title: {
                ru: 'Информация',
                lv: 'Informācija',
            },
            content: {
                ru: `<p><b>Future Live!</b> - семейная выставка! Это означает, что ее можно и нужно посещать всей семьей. В пространстве выставки дети и взрослые найдут для себя интересные активности и смогут весело и полезно провести время.</p>
<p>Выставка выполнена в формате Edutainment - наши инсталляции носят не только развлекательный характер, но демонстрируют работу мира вокруг нас, стимулируют кооперацию и формируют креативное мышление.</p>`,
                lv: `<p>"Nākotne tagad!" ir ģimenes izstāde! Tas nozīmē, ka to iespējams un vēlams apmeklēt kopā ar visu ģimeni. Šajā izstādē gan bērni, gan pieaugušie varēs atrast kādu saistošu aktivitāti un jautri un lietderīgi pavadīt laiku.</p>
<p>Izstāde veidota Edutainment stilā (izklaidējoši izglītojošā) – instalācijas ne tikai izklaidē, bet arī demonstrē apkārtējās pasaules darbības principus, stimulē spēju sadarboties ar citiem un attīsta radošo domāšanu.</p>`,
            },
            hoursTitle: {
                ru: 'Время работы',
                lv: 'Darba laiks',
            },
            hours: {
                ru: `<p>Понедельник - пятница 14:00-20:00<br/>
Выходные 11:00-20:00</p>
<p>На посещение центра рекомендуется запланировать 2-3 часа.<br/>
Вход закрывается за час до окончания работы выставки.</p>
<p>Для групп есть возможность посетить выставку вне рабочего времени, предварительно договорившись по телефону 26446696.</p>`,
                lv: `<p>Pirmdiena-piektdiena 14:00-20:00<br/>
Brīvdienas 11:00-20:00</p>
<p>Bērnu un skolu grupām ir iespēja apmeklēt izstādi ārpus darba laika, iepriekš sazinātos pa tālr. 26446696</p>
<p>Centra apmeklējumam ieteicams paredzēt 2-3 stundas.</p>
<p>Leeja aizverās vienu stundu pirms izstādes darba laika baigam..</p>`,
            },
        },
        eighth: {
            title: {
                ru: 'Праздники',
                lv: 'Svinības',
            },
            content: {
                ru: 'Мы приглашаем Вас отметить Дни рождения, Семейные праздники и другие важные для Вас события в нашем интерактивном пространстве! Мы организуем для Вас специальную программу! Пожалуйста, позвоните по телефону 26446696 и мы расскажем как сможем Вас удивить!',
                lv: 'Aicinām Jūs svinēt dzimšanas dienas, ģimenes svētkus un citus svarīgus notikumus mūsu interaktīvajā telpā! Izstrādāsim Jums īpašu programmu! Lūdzu, zvaniet uz telefona numuru 26446696, un mēs pastāstīsim, kā varam Jūs pārsteigt!',
            },
            image: eighth,
        },
        ninth: {
            title: {
                ru: 'Партнеры',
                lv: 'Patrneri',
            },
        },
        tenth: {
            title: {
                ru: 'Интерактивная выставка для всей семьи!',
                lv: 'Interaktīva izstāde visai ģimenei!',
            },
            submit: {
                ru: 'Купить билеты',
                lv: 'Pirkt biļeti',
            },
            map: {
                center: [56.962917, 24.200530],
                position: [56.973881, 24.162786],
                info: {
                    ru: 'LEVEL8 - новое многофункциональное интерактивное выставочное пространство в центре Риги. Место уже запомнилось жителям города, как площадка для проведения выставки Бал роботов и трансформируется в постоянно действующий выставочный проект от продюсеров проектов Titanic: The exhibition и Бал роботов в Латвии',
                    lv: 'LEVEL8 – jauna daudzfunkcionāla interaktīva izstāžu telpa Rīgas centrā. Pilsētas iedzīvotājiem tā jau pazīstama kā izstādes "Robotu balle" norises vieta, un nu jau tajā pastāvīgi aplūkojami izstāžu projekti, ko veido "Titāniks: izstāde" un "Robotu balle" organizatori Latvijā.',
                },
                address: {
                    ru: `<p>Elkor Plaza Латвия, Рига,<br/>
Адрес: Бривибас 201<br/>
Телефон: <a href="callto:+37126446696">+37126446696</a></p>`,
                    lv: `<p>Elkor Plaza<br/>
Latvija, Rīga,<br/>
Adrese: Brīvības iela 201<br/>
Telefons: <a href="+37126446696">+37126446696</a></p>`,
                },
            },
        },
    },
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CHANGE_LOCALE':
            sessionStorage.setItem('locale', action.locale);

            return {
                ...state,
                locale: action.locale
            };

        default:
            return state;
    }
};
