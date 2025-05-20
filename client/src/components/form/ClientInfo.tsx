import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';

// 1. Schema
const schema = z.object({
    firstName: z.string().min(2, { message: 'Хамгийн багадаа 2 тэмдэгт' }),
    lastName: z.string().min(2, { message: 'Хамгийн багадаа 2 тэмдэгт' }),
    email: z.string().email({ message: 'Зөв email бичнэ үү' }),
    phone: z.string().regex(/^\d{8}$/, { message: 'Утасны дугаар 8 оронтой байх ёстой' }),
});

// 2. Type
type FormData = z.infer<typeof schema>;

export default function ClientInfo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        console.log('Form data:', data);
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-stretch justify-center gap-[10px] mt-[20px]"
            >
                <div className="flex gap-[20px] items-center justify-center">
                    <div>
                        <label className="font-bold text-[14px]">Овог *</label>
                        <input
                            {...register('firstName')}
                            className="border p-2 w-full rounded-md"
                        />
                        <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                    </div>

                    <div>
                        <label className="font-bold text-[14px]">Өөрийн нэр *</label>
                        <input {...register('lastName')} className="border p-2 w-full rounded-md" />
                        <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                    </div>
                </div>

                <div>
                    <label className="font-bold text-[14px]">Имэйл *</label>
                    <input {...register('email')} className="border p-2 w-full rounded-md" />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </div>

                <div>
                    <label className="font-bold text-[14px]">Утасны дугаар *</label>
                    <input {...register('phone')} type='number' className="border p-2 w-full rounded-md" />
                    <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                </div>
                <Button type='submit' className="absolute bottom-[20px] right-[20px] text-white bg-demo-left cursor-pointer">
                    Захиалах
                </Button>
            </form>
        </>
    );
}
