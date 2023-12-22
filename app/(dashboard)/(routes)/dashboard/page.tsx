import {Button} from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <Button variant="destructive" size="lg">Click</Button>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
export default DashboardPage;
