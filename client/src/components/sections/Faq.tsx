'use client';
import { motion } from 'motion/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const faqs = [
    {
        question: 'TimeLink гэж юу вэ?',
        answer: 'TimeLink бол цаг захиалгын үйл явцыг бүрэн автоматжуулсан SaaS платформ юм. Та үйлчлүүлэгчдээсээ онлайн захиалга авах, мэдэгдэл илгээх, төлбөр хүлээн авах боломжтой.',
    },
    {
        question: 'TimeLink-ийг ямар төрлийн бизнесүүд ашиглаж болох вэ?',
        answer: 'TimeLink нь үсчин, гоо сайхан, шүдний эмнэлэг, зөвлөгч, багш, сургалтын төв гэх мэт цагийн үйлчилгээ үзүүлдэг хэн бүхэнд тохиромжтой.',
    },
    {
        question: 'Захиалга өгсөн хэрэглэгчид мэдэгдэл очих уу?',
        answer: 'Тийм, захиалга өгсний дараа хэрэглэгчид имэйл болон SMS мэдэгдэл автоматаар илгээгдэнэ.',
    },
    {
        question: 'TimeLink-ийг ашиглахын тулд заавал бүртгүүлэх үү?',
        answer: 'Тийм, админ болон үйлчилгээ үзүүлэгч талаас системийг бүрэн ашиглахын тулд бүртгэл шаардлагатай. Харин хэрэглэгчид цаг захиалахад бүртгэл шаардлагагүй байж болно.',
    },
    {
        question: 'TimeLink дээр хэрхэн төлбөр хийх вэ?',
        answer: 'TimeLink нь QPay системтэй холбогдсон тул хэрэглэгчид QR код уншуулж эсвэл банкны апп аар төлбөрөө хялбархан хийх боломжтой.',
    },
    {
        question: 'TimeLink ашиглахад сар бүрийн төлбөртэй юу?',
        answer: 'Үндсэн хэрэглээ нь үнэгүй. Харин Premium функцүүдийг ашиглах бол захиалгын төлбөр төлнө.',
    },
    {
        question: 'Цаг захиалгын системийг өөрийн вебсайттайгаа холбож болох уу?',
        answer: 'Тийм, TimeLink нь тусгай линк ашигладаг тул та өөрийн вебсайт, Facebook, Instagram зэрэгт захиалгын линкээ холбож болно.',
    },
    {
        question: 'Хэрвээ хэрэглэгч цаг захиалчхаад ирэхгүй бол яах вэ?',
        answer: 'TimeLink систем хэрэглэгчдэд сануулга илгээдэг. Мөн та нөхцөлөө тодорхой зааж өгснөөр cancellation policy хэрэгжүүлж болно.',
    },
    {
        question: 'Хэрэглэгч өөрийн захиалгыг яаж цуцлах вэ?',
        answer: 'Хэрэглэгчид захиалгын дараах имэйл/SMS-ээс шууд цуцлах линк дээр дарж цуцалж болно.',
    },
    {
        question: 'TimeLink дээр дата маань хэрхэн хадгалагддаг вэ?',
        answer: 'Таны бүх мэдээлэл найдвартай сервер дээр хадгалагдах ба бид хэрэглэгчийн хувийн мэдээллийг Нууцлалын бодлогын дагуу хамгаалдаг.',
    },
];

export default function Faq() {
    return (
        <>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                key="Faq"
                className="pt-[50px] min-h-screen overflow-x-hidden w-full flex items-center justify-center"
            >
                <Accordion
                    type="single"
                    collapsible
                    className="w-[800px] shadow-md rounded-4xl py-[50px] px-[150px]"
                >
                    {faqs.map((faq, i: number) => (
                        <AccordionItem key={i} value={faq.question}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </>
    );
}
