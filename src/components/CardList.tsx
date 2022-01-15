import React, { useEffect, useState } from 'react';
import { Card } from './Card';

type CardListProps = {
  search: string
}

export const CardList = ({search}: CardListProps) => {
    const [countries, setCountries] = useState<any[]>([]);

    const countriesData = [{
        "name": "Afghanistan",
        "topLevelDomain": [
          ".af"
        ],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": [
          "93"
        ],
        "capital": "Kabul",
        "altSpellings": [
          "AF",
          "Afġānistān"
        ],
        "subregion": "Southern Asia",
        "region": "Asia",
        "population": 40218234,
        "latlng": [
          33,
          65
        ],
        "demonym": "Afghan",
        "area": 652230,
        "timezones": [
          "UTC+04:30"
        ],
        "borders": [
          "IRN",
          "PAK",
          "TKM",
          "UZB",
          "TJK",
          "CHN"
        ],
        "nativeName": "افغانستان",
        "numericCode": "004",
        "flags": {
          "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
          "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        },
        "currencies": [
          {
            "code": "AFN",
            "name": "Afghan afghani",
            "symbol": "؋"
          }
        ],
        "languages": [
          {
            "iso639_1": "ps",
            "iso639_2": "pus",
            "name": "Pashto",
            "nativeName": "پښتو"
          },
          {
            "iso639_1": "uz",
            "iso639_2": "uzb",
            "name": "Uzbek",
            "nativeName": "Oʻzbek"
          },
          {
            "iso639_1": "tk",
            "iso639_2": "tuk",
            "name": "Turkmen",
            "nativeName": "Türkmen"
          }
        ],
        "translations": {
          "br": "Afeganistão",
          "pt": "Afeganistão",
          "nl": "Afghanistan",
          "hr": "Afganistan",
          "fa": "افغانستان",
          "de": "Afghanistan",
          "es": "Afganistán",
          "fr": "Afghanistan",
          "ja": "アフガニスタン",
          "it": "Afghanistan",
          "hu": "Afganisztán"
        },
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "regionalBlocs": [
          {
            "acronym": "SAARC",
            "name": "South Asian Association for Regional Cooperation"
          }
        ],
        "cioc": "AFG",
        "independent": true
      },
      {
        "name": "Åland Islands",
        "topLevelDomain": [
          ".ax"
        ],
        "alpha2Code": "AX",
        "alpha3Code": "ALA",
        "callingCodes": [
          "358"
        ],
        "capital": "Mariehamn",
        "altSpellings": [
          "AX",
          "Aaland",
          "Aland",
          "Ahvenanmaa"
        ],
        "subregion": "Northern Europe",
        "region": "Europe",
        "population": 28875,
        "latlng": [
          60.116667,
          19.9
        ],
        "demonym": "Ålandish",
        "area": 1580,
        "timezones": [
          "UTC+02:00"
        ],
        "nativeName": "Åland",
        "numericCode": "248",
        "flags": {
          "svg": "https://flagcdn.com/ax.svg",
          "png": "https://flagcdn.com/w320/ax.png"
        },
        "currencies": [
          {
            "code": "EUR",
            "name": "Euro",
            "symbol": "€"
          }
        ],
        "languages": [
          {
            "iso639_1": "sv",
            "iso639_2": "swe",
            "name": "Swedish",
            "nativeName": "svenska"
          }
        ],
        "translations": {
          "br": "Ilhas de Aland",
          "pt": "Ilhas de Aland",
          "nl": "Ålandeilanden",
          "hr": "Ålandski otoci",
          "fa": "جزایر الند",
          "de": "Åland",
          "es": "Alandia",
          "fr": "Åland",
          "ja": "オーランド諸島",
          "it": "Isole Aland",
          "hu": "Åland-szigetek"
        },
        "flag": "https://flagcdn.com/ax.svg",
        "regionalBlocs": [
          {
            "acronym": "EU",
            "name": "European Union"
          }
        ],
        "independent": false
      },{
          "name": "Albania",
          "topLevelDomain": [
            ".al"
          ],
          "alpha2Code": "AL",
          "alpha3Code": "ALB",
          "callingCodes": [
            "355"
          ],
          "capital": "Tirana",
          "altSpellings": [
            "AL",
            "Shqipëri",
            "Shqipëria",
            "Shqipnia"
          ],
          "subregion": "Southern Europe",
          "region": "Europe",
          "population": 2837743,
          "latlng": [
            41,
            20
          ],
          "demonym": "Albanian",
          "area": 28748,
          "gini": 33.2,
          "timezones": [
            "UTC+01:00"
          ],
          "borders": [
            "MNE",
            "GRC",
            "MKD",
            "UNK"
          ],
          "nativeName": "Shqipëria",
          "numericCode": "008",
          "flags": {
            "svg": "https://flagcdn.com/al.svg",
            "png": "https://flagcdn.com/w320/al.png"
          },
          "currencies": [
            {
              "code": "ALL",
              "name": "Albanian lek",
              "symbol": "L"
            }
          ],
          "languages": [
            {
              "iso639_1": "sq",
              "iso639_2": "sqi",
              "name": "Albanian",
              "nativeName": "Shqip"
            }
          ],
          "translations": {
            "br": "Albânia",
            "pt": "Albânia",
            "nl": "Albanië",
            "hr": "Albanija",
            "fa": "آلبانی",
            "de": "Albanien",
            "es": "Albania",
            "fr": "Albanie",
            "ja": "アルバニア",
            "it": "Albania",
            "hu": "Albánia"
          },
          "flag": "https://flagcdn.com/al.svg",
          "regionalBlocs": [
            {
              "acronym": "CEFTA",
              "name": "Central European Free Trade Agreement"
            }
          ],
          "cioc": "ALB",
          "independent": true
        },
        {
          "name": "Algeria",
          "topLevelDomain": [
            ".dz"
          ],
          "alpha2Code": "DZ",
          "alpha3Code": "DZA",
          "callingCodes": [
            "213"
          ],
          "capital": "Algiers",
          "altSpellings": [
            "DZ",
            "Dzayer",
            "Algérie"
          ],
          "subregion": "Northern Africa",
          "region": "Africa",
          "population": 43851043,
          "latlng": [
            28,
            3
          ],
          "demonym": "Algerian",
          "area": 2381741,
          "gini": 27.6,
          "timezones": [
            "UTC+01:00"
          ],
          "borders": [
            "TUN",
            "LBY",
            "NER",
            "ESH",
            "MRT",
            "MLI",
            "MAR"
          ],
          "nativeName": "الجزائر",
          "numericCode": "012",
          "flags": {
            "svg": "https://flagcdn.com/dz.svg",
            "png": "https://flagcdn.com/w320/dz.png"
          },
          "currencies": [
            {
              "code": "DZD",
              "name": "Algerian dinar",
              "symbol": "د.ج"
            }
          ],
          "languages": [
            {
              "iso639_1": "ar",
              "iso639_2": "ara",
              "name": "Arabic",
              "nativeName": "العربية"
            }
          ],
          "translations": {
            "br": "Argélia",
            "pt": "Argélia",
            "nl": "Algerije",
            "hr": "Alžir",
            "fa": "الجزایر",
            "de": "Algerien",
            "es": "Argelia",
            "fr": "Algérie",
            "ja": "アルジェリア",
            "it": "Algeria",
            "hu": "Algéria"
          },
          "flag": "https://flagcdn.com/dz.svg",
          "regionalBlocs": [
            {
              "acronym": "AU",
              "name": "African Union",
              "otherNames": [
                "الاتحاد الأفريقي",
                "Union africaine",
                "União Africana",
                "Unión Africana",
                "Umoja wa Afrika"
              ]
            },
            {
              "acronym": "AL",
              "name": "Arab League",
              "otherNames": [
                "جامعة الدول العربية",
                "Jāmiʻat ad-Duwal al-ʻArabīyah",
                "League of Arab States"
              ]
            }
          ],
          "cioc": "ALG",
          "independent": true
        },
        {
          "name": "American Samoa",
          "topLevelDomain": [
            ".as"
          ],
          "alpha2Code": "AS",
          "alpha3Code": "ASM",
          "callingCodes": [
            "1"
          ],
          "capital": "Pago Pago",
          "altSpellings": [
            "AS",
            "Amerika Sāmoa",
            "Amelika Sāmoa",
            "Sāmoa Amelika"
          ],
          "subregion": "Polynesia",
          "region": "Oceania",
          "population": 55197,
          "latlng": [
            -14.33333333,
            -170
          ],
          "demonym": "American Samoan",
          "area": 199,
          "timezones": [
            "UTC-11:00"
          ],
          "nativeName": "American Samoa",
          "numericCode": "016",
          "flags": {
            "svg": "https://flagcdn.com/as.svg",
            "png": "https://flagcdn.com/w320/as.png"
          },
          "currencies": [
            {
              "code": "USD",
              "name": "United States Dollar",
              "symbol": "$"
            }
          ],
          "languages": [
            {
              "iso639_1": "en",
              "iso639_2": "eng",
              "name": "English",
              "nativeName": "English"
            },
            {
              "iso639_1": "sm",
              "iso639_2": "smo",
              "name": "Samoan",
              "nativeName": "gagana fa'a Samoa"
            }
          ],
          "translations": {
            "br": "Samoa Americana",
            "pt": "Samoa Americana",
            "nl": "Amerikaans Samoa",
            "hr": "Američka Samoa",
            "fa": "ساموآی آمریکا",
            "de": "Amerikanisch-Samoa",
            "es": "Samoa Americana",
            "fr": "Samoa américaines",
            "ja": "アメリカ領サモア",
            "it": "Samoa Americane",
            "hu": "Amerikai Szamoa"
          },
          "flag": "https://flagcdn.com/as.svg",
          "cioc": "ASA",
          "independent": false
        },
        {
          "name": "Andorra",
          "topLevelDomain": [
            ".ad"
          ],
          "alpha2Code": "AD",
          "alpha3Code": "AND",
          "callingCodes": [
            "376"
          ],
          "capital": "Andorra la Vella",
          "altSpellings": [
            "AD",
            "Principality of Andorra",
            "Principat d'Andorra"
          ],
          "subregion": "Southern Europe",
          "region": "Europe",
          "population": 77265,
          "latlng": [
            42.5,
            1.5
          ],
          "demonym": "Andorran",
          "area": 468,
          "timezones": [
            "UTC+01:00"
          ],
          "borders": [
            "FRA",
            "ESP"
          ],
          "nativeName": "Andorra",
          "numericCode": "020",
          "flags": {
            "svg": "https://flagcdn.com/ad.svg",
            "png": "https://flagcdn.com/w320/ad.png"
          },
          "currencies": [
            {
              "code": "EUR",
              "name": "Euro",
              "symbol": "€"
            }
          ],
          "languages": [
            {
              "iso639_1": "ca",
              "iso639_2": "cat",
              "name": "Catalan",
              "nativeName": "català"
            }
          ],
          "translations": {
            "br": "Andorra",
            "pt": "Andorra",
            "nl": "Andorra",
            "hr": "Andora",
            "fa": "آندورا",
            "de": "Andorra",
            "es": "Andorra",
            "fr": "Andorre",
            "ja": "アンドラ",
            "it": "Andorra",
            "hu": "Andorra"
          },
          "flag": "https://flagcdn.com/ad.svg",
          "cioc": "AND",
          "independent": true
        },
        {
          "name": "Angola",
          "topLevelDomain": [
            ".ao"
          ],
          "alpha2Code": "AO",
          "alpha3Code": "AGO",
          "callingCodes": [
            "244"
          ],
          "capital": "Luanda",
          "altSpellings": [
            "AO",
            "República de Angola",
            "ʁɛpublika de an'ɡɔla"
          ],
          "subregion": "Middle Africa",
          "region": "Africa",
          "population": 32866268,
          "latlng": [
            -12.5,
            18.5
          ],
          "demonym": "Angolan",
          "area": 1246700,
          "gini": 51.3,
          "timezones": [
            "UTC+01:00"
          ],
          "borders": [
            "COG",
            "COD",
            "ZMB",
            "NAM"
          ],
          "nativeName": "Angola",
          "numericCode": "024",
          "flags": {
            "svg": "https://flagcdn.com/ao.svg",
            "png": "https://flagcdn.com/w320/ao.png"
          },
          "currencies": [
            {
              "code": "AOA",
              "name": "Angolan kwanza",
              "symbol": "Kz"
            }
          ],
          "languages": [
            {
              "iso639_1": "pt",
              "iso639_2": "por",
              "name": "Portuguese",
              "nativeName": "Português"
            }
          ],
          "translations": {
            "br": "Angola",
            "pt": "Angola",
            "nl": "Angola",
            "hr": "Angola",
            "fa": "آنگولا",
            "de": "Angola",
            "es": "Angola",
            "fr": "Angola",
            "ja": "アンゴラ",
            "it": "Angola",
            "hu": "Angola"
          },
          "flag": "https://flagcdn.com/ao.svg",
          "regionalBlocs": [
            {
              "acronym": "AU",
              "name": "African Union",
              "otherNames": [
                "الاتحاد الأفريقي",
                "Union africaine",
                "União Africana",
                "Unión Africana",
                "Umoja wa Afrika"
              ]
            }
          ],
          "cioc": "ANG",
          "independent": true
        },
        {
          "name": "Anguilla",
          "topLevelDomain": [
            ".ai"
          ],
          "alpha2Code": "AI",
          "alpha3Code": "AIA",
          "callingCodes": [
            "1"
          ],
          "capital": "The Valley",
          "altSpellings": [
            "AI"
          ],
          "subregion": "Caribbean",
          "region": "Americas",
          "population": 13452,
          "latlng": [
            18.25,
            -63.16666666
          ],
          "demonym": "Anguillian",
          "area": 91,
          "timezones": [
            "UTC-04:00"
          ],
          "nativeName": "Anguilla",
          "numericCode": "660",
          "flags": {
            "svg": "https://flagcdn.com/ai.svg",
            "png": "https://flagcdn.com/w320/ai.png"
          },
          "currencies": [
            {
              "code": "XCD",
              "name": "East Caribbean dollar",
              "symbol": "$"
            }
          ],
          "languages": [
            {
              "iso639_1": "en",
              "iso639_2": "eng",
              "name": "English",
              "nativeName": "English"
            }
          ],
          "translations": {
            "br": "Anguila",
            "pt": "Anguila",
            "nl": "Anguilla",
            "hr": "Angvila",
            "fa": "آنگویلا",
            "de": "Anguilla",
            "es": "Anguilla",
            "fr": "Anguilla",
            "ja": "アンギラ",
            "it": "Anguilla",
            "hu": "Anguilla"
          },
          "flag": "https://flagcdn.com/ai.svg",
          "independent": false
        },
        {
          "name": "Antarctica",
          "topLevelDomain": [
            ".aq"
          ],
          "alpha2Code": "AQ",
          "alpha3Code": "ATA",
          "callingCodes": [
            "672"
          ],
          "subregion": "Antarctica",
          "region": "Polar",
          "population": 1000,
          "latlng": [
            -74.65,
            4.48
          ],
          "demonym": "Antarctic",
          "area": 14000000,
          "timezones": [
            "UTC-03:00",
            "UTC+03:00",
            "UTC+05:00",
            "UTC+06:00",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+10:00",
            "UTC+12:00"
          ],
          "nativeName": "Antarctica",
          "numericCode": "010",
          "flags": {
            "svg": "https://flagcdn.com/aq.svg",
            "png": "https://flagcdn.com/w320/aq.png"
          },
          "languages": [
            {
              "iso639_1": "en",
              "iso639_2": "eng",
              "name": "English",
              "nativeName": "English"
            },
            {
              "iso639_1": "ru",
              "iso639_2": "rus",
              "name": "Russian",
              "nativeName": "Русский"
            }
          ],
          "translations": {
            "br": "Antártida",
            "pt": "Antárctida",
            "nl": "Antarctica",
            "hr": "Antarktika",
            "fa": "جنوبگان",
            "de": "Antarktika",
            "es": "Antártida",
            "fr": "Antarctique",
            "ja": "南極大陸",
            "it": "Antartide",
            "hu": "Antarktisz"
          },
          "flag": "https://flagcdn.com/aq.svg",
          "independent": false
        },
        {
          "name": "Antigua and Barbuda",
          "topLevelDomain": [
            ".ag"
          ],
          "alpha2Code": "AG",
          "alpha3Code": "ATG",
          "callingCodes": [
            "1"
          ],
          "capital": "Saint John's",
          "altSpellings": [
            "AG"
          ],
          "subregion": "Caribbean",
          "region": "Americas",
          "population": 97928,
          "latlng": [
            17.05,
            -61.8
          ],
          "demonym": "Antiguan, Barbudan",
          "area": 442,
          "timezones": [
            "UTC-04:00"
          ],
          "nativeName": "Antigua and Barbuda",
          "numericCode": "028",
          "flags": {
            "svg": "https://flagcdn.com/ag.svg",
            "png": "https://flagcdn.com/w320/ag.png"
          },
          "currencies": [
            {
              "code": "XCD",
              "name": "East Caribbean dollar",
              "symbol": "$"
            }
          ],
          "languages": [
            {
              "iso639_1": "en",
              "iso639_2": "eng",
              "name": "English",
              "nativeName": "English"
            }
          ],
          "translations": {
            "br": "Antígua e Barbuda",
            "pt": "Antígua e Barbuda",
            "nl": "Antigua en Barbuda",
            "hr": "Antigva i Barbuda",
            "fa": "آنتیگوا و باربودا",
            "de": "Antigua und Barbuda",
            "es": "Antigua y Barbuda",
            "fr": "Antigua-et-Barbuda",
            "ja": "アンティグア・バーブーダ",
            "it": "Antigua e Barbuda",
            "hu": "Antigua és Barbuda"
          },
          "flag": "https://flagcdn.com/ag.svg",
          "regionalBlocs": [
            {
              "acronym": "CARICOM",
              "name": "Caribbean Community",
              "otherNames": [
                "Comunidad del Caribe",
                "Communauté Caribéenne",
                "Caribische Gemeenschap"
              ]
            }
          ],
          "cioc": "ANT",
          "independent": true
        },
        {
          "name": "Argentina",
          "topLevelDomain": [
            ".ar"
          ],
          "alpha2Code": "AR",
          "alpha3Code": "ARG",
          "callingCodes": [
            "54"
          ],
          "capital": "Buenos Aires",
          "altSpellings": [
            "AR",
            "Argentine Republic",
            "República Argentina"
          ],
          "subregion": "South America",
          "region": "Americas",
          "population": 45376763,
          "latlng": [
            -34,
            -64
          ],
          "demonym": "Argentinean",
          "area": 2780400,
          "gini": 42.9,
          "timezones": [
            "UTC-03:00"
          ],
          "borders": [
            "BOL",
            "BRA",
            "CHL",
            "PRY",
            "URY"
          ],
          "nativeName": "Argentina",
          "numericCode": "032",
          "flags": {
            "svg": "https://flagcdn.com/ar.svg",
            "png": "https://flagcdn.com/w320/ar.png"
          },
          "currencies": [
            {
              "code": "ARS",
              "name": "Argentine peso",
              "symbol": "$"
            }
          ],
          "languages": [
            {
              "iso639_1": "es",
              "iso639_2": "spa",
              "name": "Spanish",
              "nativeName": "Español"
            },
            {
              "iso639_1": "gn",
              "iso639_2": "grn",
              "name": "Guaraní",
              "nativeName": "Avañe'ẽ"
            }
          ],
          "translations": {
            "br": "Argentina",
            "pt": "Argentina",
            "nl": "Argentinië",
            "hr": "Argentina",
            "fa": "آرژانتین",
            "de": "Argentinien",
            "es": "Argentina",
            "fr": "Argentine",
            "ja": "アルゼンチン",
            "it": "Argentina",
            "hu": "Argentína"
          },
          "flag": "https://flagcdn.com/ar.svg",
          "regionalBlocs": [
            {
              "acronym": "USAN",
              "name": "Union of South American Nations",
              "otherAcronyms": [
                "UNASUR",
                "UNASUL",
                "UZAN"
              ],
              "otherNames": [
                "Unión de Naciones Suramericanas",
                "União de Nações Sul-Americanas",
                "Unie van Zuid-Amerikaanse Naties",
                "South American Union"
              ]
            }
          ],
          "cioc": "ARG",
          "independent": true
        },
        {
          "name": "Armenia",
          "topLevelDomain": [
            ".am"
          ],
          "alpha2Code": "AM",
          "alpha3Code": "ARM",
          "callingCodes": [
            "374"
          ],
          "capital": "Yerevan",
          "altSpellings": [
            "AM",
            "Hayastan",
            "Republic of Armenia",
            "Հայաստանի Հանրապետություն"
          ],
          "subregion": "Western Asia",
          "region": "Asia",
          "population": 2963234,
          "latlng": [
            40,
            45
          ],
          "demonym": "Armenian",
          "area": 29743,
          "gini": 29.9,
          "timezones": [
            "UTC+04:00"
          ],
          "borders": [
            "AZE",
            "GEO",
            "IRN",
            "TUR"
          ],
          "nativeName": "Հայաստան",
          "numericCode": "051",
          "flags": {
            "svg": "https://flagcdn.com/am.svg",
            "png": "https://flagcdn.com/w320/am.png"
          },
          "currencies": [
            {
              "code": "AMD",
              "name": "Armenian dram",
              "symbol": "֏"
            }
          ],
          "languages": [
            {
              "iso639_1": "hy",
              "iso639_2": "hye",
              "name": "Armenian",
              "nativeName": "Հայերեն"
            }
          ],
          "translations": {
            "br": "Armênia",
            "pt": "Arménia",
            "nl": "Armenië",
            "hr": "Armenija",
            "fa": "ارمنستان",
            "de": "Armenien",
            "es": "Armenia",
            "fr": "Arménie",
            "ja": "アルメニア",
            "it": "Armenia",
            "hu": "Örményország"
          },
          "flag": "https://flagcdn.com/am.svg",
          "regionalBlocs": [
            {
              "acronym": "EEU",
              "name": "Eurasian Economic Union",
              "otherAcronyms": [
                "EAEU"
              ]
            }
          ],
          "cioc": "ARM",
          "independent": true
        }]

    useEffect(() => {
        setCountries(countriesData);
    }, [])

    return (
        <div className="card-container">
            {countries
            .filter(({name, region, capital}) => {
              const valuesToSearch = [name, region, capital]
              .map(val => ` ${val}`.toLowerCase());
              return valuesToSearch.join('.').includes(search.toLowerCase());
            })
            .map(item => {
                return <Card
                    key={item.cioc}
                    name={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                    flag={item.flag}
                    code={item.cioc}
                />
            })}
        </div>
    )
}