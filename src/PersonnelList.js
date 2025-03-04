import React, { useState, useEffect } from "react";

const groups = [
{name: "کارشناسان", contacts: 
	[
	{name: "عقيل ايمانپور", role: "کارشناس", phone: "09120847522"},
	{name: "محمد امين شافعي", role: "کارشناس", phone: "09124707619"},
	{name: "عبداله بيات", role: "کارشناس", phone: "09101601861"},
	{name: "رضا آبلو", role: "کارشناس", phone: "09124349071"},
	{name: "جواد ابراهيم زاده", role: "کارشناس", phone: "09356558145"},
	{name: "اسماعيل گلي پور", role: "تکنسين", phone: "09123584760"},
	{name: "بهراد حسن پور", role: "کارشناس", phone: "09121574266"}
	]
},

{name: "پله برقي", 
 shiftTracking: true,
 contacts: 
	[
	{name: "مهدي محمد نژاد", role: "تکنسين", phone: "09369299698"},	
	{name: "جواد يادگاري", role: "تکنسين", phone: "09192259665"},
	{name: "محمد جواد بک ورديلو", role: "تکنسين", phone: "09370198339"},
	{name: "محمد ابراهيمي", role: "تکنسين", phone: "09104869225"},
	{name: "محمد رضا مهر پور", role: "تکنسين", phone: "09199938231"},
	{name: "حميد مير بزرگي", role: "تکنسين", phone: "09015221463"},
	{name: "محمد پروين", role: "تکنسين", phone: "09198258749"},
	{name: "محمد اکبري", role: "تکنسين", phone: "09350551496"},
	{name: "احسان زماني زاده", role: "تکنسين", phone: "09363984943"},
	{name: "متين رفيعي", role: "تکنسين", phone: "09352828266"},
	{name: "محمد امين کوليسه وند", role: "تکنسين", phone: "09120590831"},
	{name: "محمد رضا رخشان", role: "تکنسين", phone: "09104358128"},
	{name: "مصطفي يار محمدي", role: "تکنسين", phone: "09353599369"},
	{name: "جواد مهين زارع", role: "تکنسين", phone: "09196373735"},
	{name: "سياوش عبدي", role: "تکنسين", phone: "09120493849"},
	{name: "مهدي حکيمي آستايي", role: "تکنسين", phone: "09118233554"}	
	]
},

{name: "آسانسور", 
 shiftTracking: true,
 contacts: 
	[
	{name: "ميلاد خيرخواه", role: "تکنسين", phone: "09377771850"},
	{name: "مهدي بيات", role: "تکنسين", phone: "09127135092"},
	{name: "عباس رشيدزاده", role: "تکنسين", phone: "09374764504"},
	{name: "حميد رضا آسياباني", role: "تکنسين", phone: "09127238135"},
	{name: "پدرام آذر فرين", role: "تکنسين", phone: "09197325759"},
	{name: "حميد نوريان", role: "تکنسين", phone: "09195954629"},
	{name: "مجيد اسماعيلي", role: "تکنسين فني", phone: "09198662985"},
	{name: "علي خودسياني", role: "تکنسين", phone: "09193228454"},
	{name: "حامد کشوري مودب", role: "تکنسين", phone: "09185900004"},
	{name: "عليرضا رحيمي", role: "تکنسين", phone: "09191013298"},
	{name: "مصطفي سالاري هويدا", role: "تکنسين", phone: "09026779390"}


	]
},

{name: "اسپايدر ليفت", contacts: 
	[
	{name: "بهنام رادمهر", role: "اپراتور", phone: "09193613102"},
	{name: "فاروق شيخي", role: "تکنسين", phone: "09192542189"},
	{name: "شاهرخ صفاري زاده", role: "اپراتور", phone: "09354201293"},
	{name: "مهدي صفري", role: "اپراتور", phone: "09194913828"},
	{name: "سعيد حسيني", role: "اپراتور", phone: "09909564060"}
	]
},

{name: "دربها", contacts: 
	[
	{name: "وحيد حاتمي", role: "تکنسين", phone: "09399469036"},
	{name: "محمد بنيادي", role: "تکنسين", phone: "09129629268"},
	{name: "جواد علي ميرزايي", role: "تکنسين", phone: "09102274825"}

	]
},

{name: "مرکز تعميرات", contacts: 
	[
	{name: "رامين افشار", role: "تکنسين", phone: "09931719340"},
	{name: "قاسم شمس الهي", role: "تکنسين", phone: "09356099223"},
	{name: "محمد داداش زاد", role: "تکنسين", phone: "09198383386"},
	{name: "قدرت شيخي", role: "تکنسين", phone: "09199928925"},
	{name: "عباس حسيني", role: "تکنسين", phone: "09120219785"}
	]
},

{name: "تعميرات خودرو", contacts: 
	[
	{name: "هادي  عظيمي", role: "تکنسين", phone: "09120943698"},
	{name: "جواد شهابي آذر", role: "تکنسين", phone: "09120448273"},
	{name: "اصغر جوادي مهمان لو", role: "تکنسين", phone: "09124500989"},
	{name: "حسن غفاري", role: "تکنسين", phone: "09193467168"},
	{name: "ابوالفضل شوقي بنام", role: "تکنسين", phone: "09352261229"},
	{name: "بابک شجري", role: "تکنسين", phone: "09146828051"},
	{name: "بهنام نجفي", role: "تکنسين", phone: "09142341447"},
	{name: "حامد خوشنواز", role: "تکنسين", phone: "09128774464"}
	]
},

{name: "اداري", contacts: 
	[
	{name: "عليرضا مجاب", role: "مدير گروه", phone: "09177111253"},
	{name: "عسل صفايي", role: "کاربر اجرايي", phone: "09337828916"}
	]
}

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
    <div className="p-6 bg-gray-100 min-h-screen text-right">
      <h1 className="text-2xl font-bold mb-4">اطلاعات تماس پرسنل</h1>
      {groups.map((group, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleGroup(index)}
            className="w-full text-right bg-blue-600 text-white p-4 text-xl rounded-lg font-bold"
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
                    className={`flex items-center justify-between border-b py-3 px-4 text-lg 
  			${shiftTeams[currentShift]?.some(name => name.trim() === contact.name.trim()) ? 'bg-green-200' : ''}`}
		  >
                    <a
                      href={`tel:${contact.phone + " "}`}
                      className="ltr text-blue-600 underline text-lg font-semibold"
                    >
                      {contact.phone}
                    </a>
                    
                    {contact.role !="" ? (
                      <span className="text-sm text-black-600 flex-grow text-center">{" " + contact.role + " "}</span>
                    ) : null}
                    <span className="rtl text-left">{" " + contact.name}</span>
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
