import React, { useState, useEffect } from "react";

const groups = [
{name: "محمد پروين", role: "1667", phone: "09198258749"},
{name: "محمد اکبري", role: "1699", phone: "09350551496"},
{name: "احسان زماني زاده", role: "1675", phone: "09363984943"},
{name: "متين رفيعي", role: "1677", phone: "09352828266"},
{name: "محمد امين کوليسه وند", role: "1674", phone: "09120590831"},
{name: "محمد رضا رخشان", role: "1697", phone: "09104358128"},
{name: "مصطفي يار محمدي", role: "1670", phone: "09353599369"},
{name: "جواد مهين زارع", role: "1667", phone: "09196373735"},
{name: "سياوش عبدي", role: "1668", phone: "09120493849"},
{name: "مهدي حکيمي آستايي", role: "1852", phone: "09118233554"}]},

{name: "آسانسور", contacts: [
{name: "ميلاد خيرخواه", role: "1680", phone: "09377771850"},
{name: "مهدي بيات", role: "2107", phone: "09127135092"},
{name: "عباس رشيدزاده", role: "2109", phone: "09374764504"},
{name: "حميد رضا آسياباني", role: "1679", phone: "09127238135"},
{name: "پدرام آذر فرين", role: "1899", phone: "09197325759"},
{name: "حميد نوريان", role: "2110", phone: "09195954629"},
{name: "مجيد اسماعيلي", role: "1687", phone: "09198662985"},
{name: "علي خودسياني", role: "1898", phone: "09193228454"},
{name: "حامد کشوري مودب", role: "1681", phone: "09185900004"},
{name: "عليرضا رحيمي", role: "1686", phone: "09191013298"},
{name: "مصطفي سالاري هويدا", role: "1722", phone: "09026779390"}]},

{name: "اسپايدر ليفت", contacts: [
{name: "بهنام رادمهر", role: "1106", phone: "09193613102"},
{name: "فاروق شيخي", role: "1688", phone: "09192542189"},
{name: "شاهرخ صفاري زاده", role: "1147", phone: "09354201293"},
{name: "مهدي صفري", role: "2079", phone: "09194913828"},
{name: "سعيد حسيني", role: "1262", phone: "09909564060
09374571647"}]},

{name: "دربها", contacts: [
{name: "وحيد حاتمي", role: "1790", phone: "09399469036"},
{name: "محمد بنيادي", role: "1723", phone: "09129629268"},
{name: "جواد علي ميرزايي", role: "1801", phone: "09102274825"}]},

{name: "مرکز تعميرات", contacts: [
{name: "رامين افشار", role: "2137", phone: "09931719340"},
{name: "قاسم شمس الهي", role: "2147", phone: "09356099223"},
{name: "محمد داداش زاد", role: "2144", phone: "09198383386"},
{name: "قدرت شيخي", role: "7867", phone: "09199928925"},
{name: "عباس حسيني", role: "7643", phone: "09120219785"},
]},

{name: "تعميرات خودرو", contacts: [
{name: "هادي 
 عظيمي", role: "7178", phone: "09120943698
"},
{name: "جواد شهابي آذر", role: "7064", phone: "09120448273"},
{name: "اصغر جوادي مهمان لو", role: "7509", phone: "09124500989"},
{name: "حسن غفاري", role: "7108", phone: "09193467168"},
{name: "ابوالفضل شوقي بنام", role: "7293", phone: "09352261229"},
{name: "بابک شجري", role: "7533", phone: "09146828051"},
{name: "بهنام نجفي", role: "7065", phone: "09142341447"},
{name: "حامد خوشنواز", role: "1961", phone: "09128774464"}]},

{name: "اداري", contacts: [
{name: "عليرضا مجاب", role: "586", phone: "09177111253"},
{name: "عسل صفايي", role: "2266", phone: "09337828916"}]}
];

const shiftTeams = {
  A: ["مهدي محمد نژاد" ,"حميد مير بزرگي", "محمد جواد بک ورديلو" , "محمد رضا مهر پور", "محمد ابراهيمي", "جواد يادگاري", 
	"ميلاد خيرخواه" , "مهدي بيات" , "عباس رشيدزاده" ],
  B: [ "محمد پروين" , "محمد اکبري" , "احسان زماني زاده" , "محمد امين کوليسه وند" , "متين رفيعي" ,
	"حميد رضا آسياباني", "مجيد اسماعيلي" , "پدرام آذر فرين", "حميد نوريان" ],
  C: [ "محمد رضا رخشان" , "جواد مهين زارع" , "مصطفي يار محمدي" , "سياوش عبدي" , "مهدي حکيمي آستايي" , 
	"علي خودسياني" , "عليرضا رحيمي" , "حامد کشوري مودب" , "مصطفي سالاري هويدا"]
};

const getCurrentShift = () => {
  const teamNames = Object.keys(shiftTeams);
  const shiftStart = new Date("2025-03-03T20:00:00");
  const now = new Date();
  const elapsedMinutes = Math.floor((now - shiftStart) / (1000 * 60));
  const shiftIndex = Math.floor(elapsedMinutes / (12 * 60)) % 3  ; // Changed to 8-hour shift
  return teamNames[shiftIndex];
};

const PersonnelList = () => {
  const [currentShift, setCurrentShift] = useState(getCurrentShift());
  const [openGroups, setOpenGroups] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShift(getCurrentShift());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleGroup = (index) => {
    setOpenGroups((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">اطلاعات تماس پرسنل</h1>
      {groups.map((group, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleGroup(index)}
            className="w-full text-center bg-blue-200 text-black p-3 rounded-lg font-semibold"
          >
            {group.name}
          </button>
          {openGroups[index] && (
            <div className="mt-2 p-4 bg-white shadow-lg rounded-lg">
              {group.shiftTracking && (
                <div className="mb-2 text-sm text-gray-600">
                  شیفت فعلی: <strong>Team {currentShift}</strong>
                </div>
              )}
              <ul>
                {group.contacts.map((contact, i) => (
                  <li
                    key={i}
                    className={`flex flex-wrap items-center justify-between border-b py-2 px-4 text-lg ${shiftTeams[currentShift]?.includes(contact.name) ? 'bg-green-200' : ''}`}
                  >
                    <a
                      href={`tel:${contact.phone}`}
                      className="ltr text-blue-600 underline"
                    >
                      {contact.phone}
                    </a>
                    {contact.role && (
                      <span className="text-xs sm:text-sm text-black-600 flex-grow text-center whitespace-nowrap overflow-hidden">{contact.role}</span>
                    )}
                    <span className="rtl text-right w-1/3">{contact.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonnelList;
