import Image from "next/image";

export const TopicPage = () => {
  return (
    <>
      <div className="max-w-[720px] mx-auto divide-y">
        <div className="max-h-[1200px] text-center border py-10">
          <div className="w-3/5 mx-auto space-y-5 py-4">
            <div>Ч.Оюунбилэг, В.Энхжаргал, Ж.Ууганцэцэг</div>
            <div>Х.Энхжаргал, С.Баасандулам, Д.Энхжаргал</div>
          </div>
          <div className="py-[8rem]">хөгжим</div>
          <div className="mb-10">III</div>
          <div className="space-y-2">
            {" "}
            <div>Ерөнхий боловсролын сургуулийн</div>
            <div>3 дугаар ангийн сурах бичиг</div>
          </div>
          <div className="my-10 w-3/5 mx-auto">
            Боловсрол, Соёл, Шинжлэх Ухаан, Спортын Яамны зөвшөөрлөөр хэвлэв.
          </div>
          <div className="mb-[20rem]">Долоо дахь хэвлэл</div>
          <div className="my-5 w-3/5 mx-auto">
            СУРГУУЛИЙН НОМЫН САНД ОЛГОВ. БОРЛУУЛАХЫГ ХОРИГЛОНО.
          </div>
          <div className="my-5">Улаанбаатар хот</div>
          <div>2020 он</div>
        </div>
        <div className="max-h-[1200px] border py-10 px-4 text-[11pt]">
          <div className="space-y-10">
            <div>DDC</div>
            <div>371.32</div>
            <div>Х-545</div>
          </div>
          <div className="">
            Хөгжим III: Ерөнхий боловсролын сургуулийн 3 дугаар ангийн сурах
            бичиг / Оюунбилэг Ч., ба бус; Ред. Нямсүрэн Г - УБ. 2014.-68х
          </div>
          <div className="mt-[440px] mb-[1rem] leading-7">
            Энэхүү сурах бичиг нь “Монгол Улсын Зохиогчийн эрх болон түүнд
            хамаарах эрхийн тухай” хуулиар хамгаалагдсан бөгөөд Боловсрол, Соёл,
            Шинжлэх Ухаан, Спортын Яамнаас бичгээр авсан зөвшөөрлөөс бусад
            тохиолдолд цахим болон хэвлэмэл хэлбэрээр, бүтнээр эсвэл хэсэгчлэн
            хувилах, хэвлэх, аливаа хэлбэрээр мэдээллийн санд оруулахыг
            хориглоно.
          </div>
          <div className="text-[10pt] mb-[1rem]">
            Сурах бичгийн талаарх аливаа санал, хүсэлтээ textbook@mecs.gov.mn
            хаягаар ирүүлнэ үү.
          </div>
          <div className="mb-[1rem]">
            © Боловсрол, Соёл, Шинжлэх Ухаан, Спортын Яам
          </div>
          <span className="text-[12pt] font-courier text-base">
            ISBN 978-99973-69-67-3
          </span>
        </div>
        <div className="mx-h-[1200px] border py-10 px-4 text-[11pt]">
          <div className="text-[#0089cf] text-[13pt] font-bold text-center mb-[1rem]">
            ГАРЧИГ
          </div>
          <div className="border w-[640px] h-[1200px] bg-gray-200 mx-auto">
            ХҮснэгт
          </div>
          <div className="text-[#0089cf] text-[13px] font-bold text-center mb-[1rem] mt-[1rem]">
            ӨМНӨХ ҮГ
          </div>
          <div className="space-y-8">
            <div>Сайн байцгаана уу? Хүүхдүүд ээ!</div>
            <div>Хичээлийн шинэ жилийн баярын мэнд хүргэе!</div>
            <div>
              Хүүхдүүд та нар хөгжмийн эгшгийн өндөр нам, чанга сул, өнгө аяс,
              хурд, хүчийг мэдэрч, дуулж, хөгжимдөж, бүжиглэж бас хэмнэлээр
              хөгжимдөж сурсан.
            </div>
            <div>
              Ямар нэг бичиг үсэггүйгээр хөгжмийг хэрхэн тэмдэглэх билээ? Иймд
              бид хөгжмийн эгшиг аялгууг бичиж тэмдэглэх ноот бичлэгтэй
              хоёрдугаар ангидаа танилцаж ноотоор дуулах гараагаа эхэлсэн.
            </div>
            <div>
              Харин энэ удаад та нар ноотоор дуулахын зэрэгцээ бишгүүр хөгжмөөр
              хөгжимдөж сурна. Үүний тулд хүүхэд бүр өөрийн бишгүүр хөгжимтэй
              болоорой. Бишгүүр бол үлээвэр хөгжим учраас бусдад дамжуулах нь
              амьсгалын болон амны хөндийн эрүүл ахуйд нийцэхгүй гэдгийг
              анхаараарай.
            </div>
            <div>
              Хүүхдүүд ээ! хөгжмийн сурах бичиг хүүхдүүд та нарыг өөртөө
              итгэлтэй, сурах, хийж бүтээх эрмэлзлэл дүүрэн, авъяаслаг сурагчид
              болоход хөтлөнө.
            </div>
          </div>
        </div>
        <div className="max-h-[1200px] border py-10 px-4">
          <div>
            <Image
              src="https://cdn.esis.edu.mn/econtent/econtent-files/3rangi-hugjim/images/Screenshot%202021-01-11%20143409.jpg"
              alt="Image Alt Text"
              width={577}
              height={739}
            />
          </div>
        </div>
        <div className="max-h-[1200px] border py-10 px-4">
          <div className="container mx-auto p-4">
            <div>
              <p className="text-left font-bold flex items-end mb-[1rem]">
                <Image
                  src="https://cdn.esis.edu.mn/econtent/econtent-files/3rangi-Khugjim/images/hug.png"
                  alt=""
                  width="125"
                  height="76"
                  className="inline-block mr-4"
                />
                ДУУЛЪЯ
              </p>
              <p className="mb-[1rem]">- Багшийгаа сонсоод дагаад дуулъя.</p>
              <p className="mb-[1rem]">
                - Тусгайлан тэмдэглэсэн хэсгүүдийг анхаарч дуулаарай.
              </p>
              <div className="flex gap-[20rem] mb-[1rem]">
                <p>Үг. Ц.Гүррагчаа</p>
                <p>Ая. Б.Ганхуяг</p>
              </div>
              <p className="mb-[1rem] ml-[15rem]">АЛТАН НОМ ДЭЛГЭЭД УГТЛАА</p>
              <p className="mb-[1rem]">
                <Image
                  src="https://cdn.esis.edu.mn/econtent/econtent-files/3rangi-hugjim/images/Screenshot%202020-12-23%20143312.jpg"
                  alt=""
                  className="w-full"
                  width={100}
                  height={100}
                />
              </p>
              <p className="flex justify-between mb-[1rem]">
                <div>Ухааныг дээдлэх</div>
                <div>Аавтайгаа, ээжтэйгээ</div>
                <div>Номдоо мөргөх</div>
              </p>
              <p className="flex justify-between mb-[1rem]">
                <div>Дээдсийн ёсоо</div>
                <div>Ардын сургуульд ороод ирэхэд</div>
                <div>Өвгөдийн ёсоо</div>
              </p>
              <p className="flex justify-between mb-[1rem]">
                <div> Ус нутаг шигээ </div>
                <div>Ачит багш тосоод угтлаа</div>
                <div> Өвлөн авах</div>
              </p>
              <p className="flex justify-between mb-[1rem]">
                <div>Хайрлах хувьтай яа</div>
                <div>Буян заяатай яа</div>
              </p>
              <p>
                <Image
                  src="https://cdn.esis.edu.mn/econtent/econtent-files/3rangi-hugjim/images/Screenshot%202020-12-23%20143534.jpg"
                  alt=""
                  className="w-full"
                  width={100}
                  height={100}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
