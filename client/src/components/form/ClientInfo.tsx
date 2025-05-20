import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Овог</label>
                    <input {...register('firstName')} className="border p-2 w-full" />
                    <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                </div>

                <div>
                    <label>Өөрийг нэр</label>
                    <input {...register('lastName')} className="border p-2 w-full" />
                    <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                </div>

                <div>
                    <label>Имэйл</label>
                    <input {...register('email')} className="border p-2 w-full" />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </div>

                <div>
                    <label>Утасны дугаар</label>
                    <input {...register('phone')} className="border p-2 w-full" />
                    <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Илгээх
                </button>
            </form>
        </>
    );
}
