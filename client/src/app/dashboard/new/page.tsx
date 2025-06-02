'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';

const LocationPicker = dynamic(() => import('@/components/features/LocationPicker'), {
    ssr: false,
});
import NewPagePreview from '@/components/sections/NewpagePreview';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { SquarePen, X } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
} from '@/components/ui/dialog';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const EventSchema = z
    .object({
        title: z.string().min(1, 'Гарчиг оруулна уу !'),
        image: z.instanceof(File).optional(),
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
        durations: z.array(z.number()).min(1, 'Үргэлжлэх хугацаа сонгоно уу'),
        increment: z.number(),
        buffer: z.number(),
        location: z.object({
            lng: z.number(),
            lat: z.number(),
        }),
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

export type EventFormType = z.infer<typeof EventSchema>;

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
        control,
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
            durations: [30],
            increment: 30,
            buffer: 0,
            location: { lat: 47.9185, lng: 106.917 },
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

    const [customDuration, setCustomDuration] = useState<number | undefined>(undefined);
    const durations = watch('durations');
    const builtIn = [30, 60, 90, 120];
    const customs = durations.filter((min) => !builtIn.includes(min));
    const displayDurations = [...builtIn, ...customs];

    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const addCustomDuration = () => {
        if (!customDuration) {
            alert('Минутаа оруулна уу');
            return;
        }
        if (customDuration >= 480) {
            alert('Уучлаарай минут хэтэрсэн байна');
            return;
        }

        if (
            !Number.isNaN(customDuration) &&
            !durations.includes(customDuration) &&
            customDuration !== 0
        ) {
            setValue('durations', [...durations, customDuration]);
            setCustomDuration(undefined);
            return;
        }

        alert('Минут алдаатай эсвэл давхцаж байна байна');
    };

    const startTime = `${watch('startHour').toString().padStart(2, '0')}:${watch('startMinute').toString().padStart(2, '0')}`;
    const endTime = `${watch('endHour').toString().padStart(2, '0')}:${watch('endMinute').toString().padStart(2, '0')}`;
    const startBreakTime = `${watch('startBreakHour').toString().padStart(2, '0')}:${watch('startBreakMinute').toString().padStart(2, '0')}`;
    const endBreakTime = `${watch('endBreakHour').toString().padStart(2, '0')}:${watch('endBreakMinute').toString().padStart(2, '0')}`;

    return (
        <>
            <div className="-z-10 absolute h-[64px] w-full shadow-md"></div>

            <div className="max-w-[1200px] w-screen mx-auto relative px-[40px] pb-[40px] min-h-screen">
                <Navbar />
                <div className="flex items-stretch justify-center w-full mt-[40px] gap-[40px]">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-1/2 relative flex flex-col items-stretch justify-start gap-[50px]"
                    >
                        <div className="shadow-md flex flex-col items-stretch justify-start gap-2.5 relative p-5 rounded-md overflow-hidden">
                            <div className="absolute top-1 right-0 w-full h-1 sm:rounded-t-lg bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                            <h1 className="font-medium text-[18px]">Цаг захиалах хуудас</h1>
                            <div className="flex items-center justify-start gap-2 mt-1.5">
                                <div>
                                    <Label>Гарчиг</Label>
                                    <Input {...register('title')} className="mt-1" />
                                    {errors.title && (
                                        <p className="text-red-500 text-sm">
                                            {errors.title.message}
                                        </p>
                                    )}
                                </div>
                                <div className="ml-8">
                                    <Label className="ml-3">
                                        Зураг -{' '}
                                        <p className="text-[12px] text-note italic">орхиж болно</p>
                                    </Label>
                                    <Input
                                        type="file"
                                        id="imageInput"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                setValue('image', file, { shouldValidate: true });
                                                setPreviewImage(URL.createObjectURL(file));
                                                e.target.value = '';
                                            }
                                        }}
                                    />
                                    <div className="flex items-end justify-center gap-2">
                                        <Label>
                                            <Button
                                                variant="outline"
                                                type="button"
                                                onClick={() =>
                                                    document.getElementById('imageInput')?.click()
                                                }
                                                className="cursor-pointer mt-1"
                                                disabled={!!watch('image')}
                                            >
                                                Өөрчлөх
                                            </Button>
                                        </Label>
                                        {watch('image') && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => {
                                                            setValue('image', undefined, {
                                                                shouldValidate: true,
                                                            });
                                                            setPreviewImage(null);
                                                        }}
                                                        className="cursor-pointer"
                                                    >
                                                        <X />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Устгах</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Label>
                                    Цаг захиалгын талаарх мэдээлэл -{' '}
                                    <p className="text-note italic text-[12px]">орхиж болно</p>
                                </Label>
                                <Textarea className="mt-1" {...register('eventDescription')} />
                            </div>
                        </div>

                        <div className="shadow-md relative p-7 rounded-md overflow-hidden">
                            <div className="absolute top-1 right-0 w-full h-1 sm:rounded-t-lg bg-gradient-to-r from-purple-400 to-pink-400"></div>
                            <div className="flex items-center justify-center gap-[7%]">
                                <div className="flex flex-col items-start justify-start gap-5 shadow-md rounded-md relative w-[170px] p-7">
                                    {Object.entries(dayNames).map(([key, label]) => (
                                        <div key={key} className="flex items-center space-x-2">
                                            <Label className="text-[16px]">{label}</Label>
                                            <Switch
                                                checked={watch('activeDays')[key]}
                                                onCheckedChange={(val) =>
                                                    setValue(`activeDays.${key}`, val)
                                                }
                                                className="cursor-pointer absolute right-[10px] scale-110 data-[state=checked]:bg-main transition-colors"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col items-start justify-center w-1/2 pr-15 pl-5">
                                    <div className="flex flex-col items-stretch justify-center gap-2 shadow-md rounded-xl p-5">
                                        <Label className="self-start mb-1.5 font-bold text-[16px]">
                                            Боломжит цаг
                                        </Label>
                                        <div className="ml-4">
                                            <Label>Эхлэх</Label>
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
                                        <div className="ml-4">
                                            <Label>Дуусах</Label>
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

                                    <div className="flex flex-col items-center justify-start gap-2 mt-5 shadow-md rounded-xl p-5">
                                        <Label className="self-start mb-1.5 font-bold text-[16px]">
                                            Цайны цаг
                                        </Label>
                                        <div className="ml-4">
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
                                        <div className="ml-4">
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
                            </div>

                            <hr className="my-[20px]" />

                            <div className="pl-5 mt-6">
                                <Label>
                                    Үргэлжлэх хугацаа -{' '}
                                    <p className="text-note text-[13px] italic">
                                        Нэг ба түүнээс олон байж болно
                                    </p>
                                </Label>
                                <ToggleGroup
                                    type="multiple"
                                    value={durations.map(String)}
                                    onValueChange={(val) => {
                                        setValue('durations', val.map(Number));
                                    }}
                                    className="flex items-center justify-center gap-2 mt-2.5"
                                >
                                    {displayDurations.map((min) => (
                                        <ToggleGroupItem
                                            key={min}
                                            value={String(min)}
                                            className=" text-wrap cursor-pointer data-[state=on]:bg-main/70 rounded-md data-[state=on]:border-violet-900 border transition-all duration-200"
                                        >
                                            <p>{min} мин</p>
                                        </ToggleGroupItem>
                                    ))}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="cursor-pointer" variant="outline">
                                                {' '}
                                                -{' '}
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Үргэлжлэх хугацаа</DialogTitle>
                                            </DialogHeader>
                                            <div className="flex items-center justify-start gap-2.5">
                                                <SquarePen />
                                                <Input
                                                    type="number"
                                                    value={customDuration ?? ''}
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        setCustomDuration(
                                                            val === '' ? undefined : Number(val),
                                                        );
                                                    }}
                                                />
                                            </div>
                                            <DialogFooter className="flex items-center justify-end gap-3.5">
                                                <DialogClose asChild>
                                                    <Button className="cursor-pointer">Хаах</Button>
                                                </DialogClose>
                                                <DialogClose asChild>
                                                    <Button
                                                        className="cursor-pointer"
                                                        onClick={addCustomDuration}
                                                    >
                                                        Хадгалах
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </ToggleGroup>
                                {errors.durations && (
                                    <p className="text-red-500 text-sm">
                                        {errors.durations.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center justify-start gap-5 ml-7 mt-7">
                                <div>
                                    <Label className="mb-1">Цагууд хоорондын зай</Label>
                                    <Select
                                        value={String(watch('increment'))}
                                        onValueChange={(val) => {
                                            setValue('increment', Number(val));
                                        }}
                                    >
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[400px] w-[150px]">
                                            {[10, 20, 30, 40, 50, 60].map((t) => (
                                                <SelectItem
                                                    key={t}
                                                    value={String(t)}
                                                    className="pl-5 cursor-pointer"
                                                >
                                                    {t} минут
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="mb-1">Уулзалтын дараах амралт</Label>
                                    <Select
                                        value={String(watch('buffer'))}
                                        onValueChange={(val) => {
                                            setValue('buffer', Number(val));
                                        }}
                                    >
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[400px] w-[150px]">
                                            {[0, 10, 20, 30].map((t) => (
                                                <SelectItem
                                                    key={t}
                                                    value={String(t)}
                                                    className="pl-5 cursor-pointer"
                                                >
                                                    {t} минут
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="shadow-md p-7 relative rounded-md overflow-hidden">
                            <div className="absolute top-1 right-0 w-full h-1 sm:rounded-t-lg bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                            <LocationPicker
                                value={watch('location')}
                                onChange={(coords) =>
                                    setValue('location', coords as { lng: number; lat: number }, {
                                        shouldValidate: true,
                                    })
                                }
                            />
                            <div className="mt-5">
                                <Label>Байршлийн дэлгэрэнгүй мэдээлэл</Label>
                                <Input
                                    {...register('locationDescription')}
                                    placeholder="Мэдээллээ оруулна уу !"
                                    className="mt-1"
                                />
                                {errors.locationDescription && (
                                    <p className="text-red-500 text-sm">
                                        {errors.locationDescription.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="py-[24px] w-[80%] mx-auto text-[16px] rounded-3xl cursor-pointer sticky bottom-[20px] z-10 bg-main hover:opacity-80"
                        >
                            Үүсгэх
                        </Button>
                    </form>

                    <section className="w-1/2">
                        <div className="sticky top-[40px]">
                            <NewPagePreview control={control} previewImage={previewImage} />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
}
