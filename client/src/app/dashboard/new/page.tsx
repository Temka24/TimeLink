'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const EventSchema = z
    .object({
        title: z.string().min(1, 'Гарчиг оруулна уу !'),
        image: z.any().optional(),
        locationDescription: z.string().min(1, 'Байршлийн дэлгэрэнгүй мэдээллээ оруулна уу'),
        eventDescription: z.string().optional(),
        activeDays: z.record(z.string(), z.boolean()),
        startHour: z.number(),
        startMinute: z.number(),
        endHour: z.number(),
        endMinute: z.number(),
        startBreakHour: z.number(),
        startBreakMinute: z.number(),
        endBreakHour: z.number(),
        endBreakMinute: z.number(),
    })
    .refine(
        (data) => {
            const start = data.startHour * 60 + data.startMinute;
            const end = data.endHour * 60 + data.endMinute;
            return end > start;
        },
        { message: 'Дуусах цаг эхлэх цагаас хойш байх ёстой ', path: ['endHour'] },
    )
    .refine(
        (data) => {
            const breakStart = data.startBreakHour * 60 + data.startBreakMinute;
            const breakEnd = data.endBreakHour * 60 + data.endBreakMinute;
            return breakEnd > breakStart;
        },
        {
            message: 'Амралтын дуусах цаг эхлэх цагаасаа хойш байх ёстой',
            path: ['endBreakHour'],
        },
    )
    .refine(
        (data) => {
            const start = data.startHour * 60 + data.startMinute;
            const end = data.endHour * 60 + data.endMinute;
            const breakStart = data.startBreakHour * 60 + data.startBreakMinute;
            const breakEnd = data.endBreakHour * 60 + data.endBreakMinute;

            return breakStart >= start && breakEnd <= end;
        },
        {
            message: 'Амралтын цаг нь ажлын цагаас дотогш байх ёстой',
            path: ['startBreakHour'],
        },
    );

type EventFormType = z.infer<typeof EventSchema>;

export default function NewPage() {
    const demoUserName = 'Temka B';

    const dayNames: Record<number, string> = {
        0: 'Ням',
        1: 'Даваа',
        2: 'Мягмар',
        3: 'Лхагва',
        4: 'Пүрэв',
        5: 'Баасан',
        6: 'Бямба',
    };

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<EventFormType>({
        resolver: zodResolver(EventSchema),
        defaultValues: {
            title: `${demoUserName} тай уулзах`,
            image: undefined,
            locationDescription: '',
            eventDescription: '',
            activeDays: {
                0: false,
                1: true,
                2: true,
                3: true,
                4: true,
                5: true,
                6: false,
            },
            startHour: 9,
            startMinute: 0,
            endHour: 17,
            endMinute: 0,
            startBreakHour: 12,
            startBreakMinute: 0,
            endBreakHour: 13,
            endBreakMinute: 0,
        },
    });

    const onSubmit = (data: EventFormType) => {
        console.log('form data', data);
    };

    const timeOptions = Array.from({ length: 48 }, (_, i) => {
        const h = Math.floor(i / 2)
            .toString()
            .padStart(2, '0');
        const m = i % 2 === 0 ? '00' : '30';
        return `${h}:${m}`;
    });

    const startTime = `${watch('startHour').toString().padStart(2, '0')}:${watch('startMinute').toString().padStart(2, '0')}`;
    const endTime = `${watch('endHour').toString().padStart(2, '0')}:${watch('endMinute').toString().padStart(2, '0')}`;
    const startBreakTime = `${watch('startBreakHour').toString().padStart(2, '0')}:${watch('startBreakMinute').toString().padStart(2, '0')}`;
    const endBreakTime = `${watch('endBreakHour').toString().padStart(2, '0')}:${watch('endBreakMinute').toString().padStart(2, '0')}`;

    return (
        <>
            <div className="-z-10 absolute h-[64px] w-full shadow-md"></div>

            <div className="max-w-[1200px] w-screen mx-auto relative px-[40px] pb-[40px] min-h-screen overflow-x-hidden border">
                <Navbar />
                <div className="flex items-center justify-center w-full h-full mt-[40px] gap-[40px]">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-1/2 relative flex flex-col items-stretch justify-start gap-[50px]"
                    >
                        <div className="shadow-md flex flex-col items-stretch justify-start gap-2.5 relative p-5">
                            <div className="absolute top-0 right-0 w-full h-1 sm:rounded-t-lg bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                            <h1 className="font-medium">Цаг захиалах хуудас</h1>
                            <div className="flex items-center justify-start gap-2">
                                <div>
                                    <Label>Гарчиг</Label>
                                    <Input {...register('title')} />
                                    {errors.title && (
                                        <p className="text-red-500 text-sm">
                                            {errors.title.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Label>Зураг</Label>
                                    <Input
                                        type="file"
                                        {...register('image')}
                                        className="file:mr-4 file:rounded-full file:border-0 cursor-pointer file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label>Байршлийн дэлгэрэнгүй мэдээлэл</Label>
                                <Input
                                    {...register('locationDescription')}
                                    placeholder="Мэдээллээ оруулна уу !"
                                />
                                {errors.locationDescription && (
                                    <p className="text-red-500 text-sm">
                                        {errors.locationDescription.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Label>
                                    Уулзалтын талаарх мэдээлэл -{' '}
                                    <p className="text-note italic text-sm">
                                        Энэ хэсгийг орхиж болно
                                    </p>
                                </Label>
                                <Textarea {...register('eventDescription')} />
                            </div>
                        </div>

                        <div className="shadow-md relative p-7">
                            <div className="absolute top-0 right-0 w-full h-1 sm:rounded-t-lg bg-gradient-to-r from-purple-400 to-pink-400"></div>
                            <div className="flex items-center justify-center gap-[20%] ">
                                <div className="flex flex-col items-start justify-start gap-5 shadow-md rounded-md relative w-[150px] p-7">
                                    {Object.entries(dayNames).map(([key, label]) => (
                                        <div key={key} className="flex items-start space-x-2">
                                            <Label>{label}</Label>
                                            <Switch
                                                checked={watch('activeDays')[key]}
                                                onCheckedChange={(val) =>
                                                    setValue(`activeDays.${key}`, val)
                                                }
                                                className="cursor-pointer absolute right-[10px]"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col items-stretch justify-center gap-5">
                                    <div>
                                        <Label>Эхлэх цаг</Label>
                                        <Select
                                            value={startTime}
                                            onValueChange={(val) => {
                                                const [h, m] = val.split(':');
                                                setValue('startHour', parseInt(h));
                                                setValue('startMinute', parseInt(m));
                                            }}
                                        >
                                            <SelectTrigger className="w-[150px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-[400px] w-[150px]">
                                                {timeOptions.map((t) => (
                                                    <SelectItem
                                                        key={t}
                                                        value={t}
                                                        className="pl-5 cursor-pointer"
                                                    >
                                                        {t}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Дуусах цаг</Label>
                                        <Select
                                            value={endTime}
                                            onValueChange={(val) => {
                                                const [h, m] = val.split(':');
                                                setValue('endHour', parseInt(h));
                                                setValue('endMinute', parseInt(m));
                                            }}
                                        >
                                            <SelectTrigger className="w-[150px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-[400px] w-[150px]">
                                                {timeOptions.map((t) => (
                                                    <SelectItem
                                                        key={t}
                                                        value={t}
                                                        className="pl-5 cursor-pointer"
                                                    >
                                                        {t}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.endHour && (
                                            <p className="text-red-500 text-sm w-[150px] text-wrap ">
                                                {errors.endHour.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-[20px]" />

                            <div className="flex items-center justify-start pl-5 gap-5 mt-6">
                                <Label>Цайны цаг</Label>
                                <div>
                                    <Label>Эхлэх</Label>
                                    <Select
                                        value={startBreakTime}
                                        onValueChange={(val) => {
                                            const [h, m] = val.split(':');
                                            setValue('startBreakHour', parseInt(h));
                                            setValue('startBreakMinute', parseInt(m));
                                        }}
                                    >
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[400px] w-[150px]">
                                            {timeOptions.map((t) => (
                                                <SelectItem
                                                    key={t}
                                                    value={t}
                                                    className="pl-5 cursor-pointer"
                                                >
                                                    {t}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.startBreakHour && (
                                        <p className="text-red-500 text-sm w-[150px] text-wrap ">
                                            {errors.startBreakHour.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Label>Дуусах</Label>
                                    <Select
                                        value={endBreakTime}
                                        onValueChange={(val) => {
                                            const [h, m] = val.split(':');
                                            setValue('endBreakHour', parseInt(h));
                                            setValue('endBreakMinute', parseInt(m));
                                        }}
                                    >
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[400px] w-[150px]">
                                            {timeOptions.map((t) => (
                                                <SelectItem
                                                    key={t}
                                                    value={t}
                                                    className="pl-5 cursor-pointer"
                                                >
                                                    {t}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.endBreakHour && (
                                        <p className="text-red-500 text-sm w-[150px] text-wrap ">
                                            {errors.endBreakHour.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button type="submit">Хадгалах</Button>
                    </form>

                    <section className="w-1/2 border-red-500 border relative h-full">de</section>
                </div>
                <Footer />
            </div>
        </>
    );
}
