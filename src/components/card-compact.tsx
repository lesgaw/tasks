import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

type CardCompactProps = {
    title: string;
    description?: string;
    content: React.ReactNode;
    className?: string;
    footer?: React.ReactNode;
}

const CardCompact = ({title, description, content, className, footer}) => {
    return (
        <Card className={className}>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}

        </CardHeader>
        <CardContent>
            { content }
        </CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
    );

}

export default CardCompact;