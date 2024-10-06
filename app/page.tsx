import Card from "@/components/Card";


 export default function home() {
  return (
    <>
    <div className="bg-orange-400 w-32 h-auto"><Card name='Alishba' rollno='12345' day='Monday' age='18' /></div>
    <br/>
    <div className="bg-slate-600 w-32 h-auto"><Card name='Ifra' rollno='54321' day='Tuesday' age='20'/></div>
    <br/>
    <div className="bg-red-400 w-32 h-auto"><Card name='Anabiya' rollno='24153' day='Wednesday' age='16' /></div>
    <br/>
    </>
  );
}


