import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { homePath, tasksPath } from "@/paths";
import { LucideAperture } from "lucide-react";
import Link from "next/link";
import ThemeSwitcher from "./theme/theme-switcher";

export default function Header() {
    return (
       <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b dark:border-amber-500 bg-background/95 backdrop-blue w-full flex py-2.5 px-5 justify-between">
        {/* Logo with link to home page */}
        <div>
        <Link href={homePath()}
        className={buttonVariants({
            variant: 'ghost',
        })}
        >
            <LucideAperture className="w-4 h-4" />
            <h1 className="text-lg font-semibold">TASKS</h1>
        </Link>
        </div>
        <div className="flex gap-x-2">
           <ThemeSwitcher />
            <Link href={tasksPath()} >
             <Button variant="outline" className="dark:bg-amber-500 uppercase text-sm border-none">
                Tasks
             </Button>
             </Link>
        </div>
       </nav>
    );
}