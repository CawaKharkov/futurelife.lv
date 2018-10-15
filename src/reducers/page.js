import elkor from '../assets/images/elkor.png';
import book from '../assets/images/book.jpg';

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
