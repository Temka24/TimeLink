'use client';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

const queryKey = ['bookings'];

export const useGetBookings = () => {
    return useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            try {
                const res = await api.get('/getBookings');
                return res.data.result;
            } catch (err) {
                const error = err as AxiosError<{ msg: string }>;

                const message = error.response?.data?.msg ?? 'Internal Server Error';
                toast.error(message);
                return null;
            }
        },
        staleTime: 1000 * 60 * 15,
        retry: 1,
    });
};
