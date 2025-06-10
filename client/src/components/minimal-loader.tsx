// components/ui/minimal-loading.tsx
import { Loader2 } from 'lucide-react';

export default function MinimalLoading() {
    return (
        <div className="flex items-center justify-center py-8 text-black">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            <span className="ml-2 text-sm text-muted-foreground">Loading...</span>
        </div>
    );
}
