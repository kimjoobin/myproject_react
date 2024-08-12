import React, {useState} from "react";
import {Input} from "../ui/input";
import {Textarea} from "../ui/textarea";
import {Button} from "../ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog"
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {postData} from "../api/api";
import {NavigateFunction, useNavigate} from "react-router-dom";

interface formValue {
    title: string;
    contents: string;
}

const BoardWrite = () => {
    const navigate: NavigateFunction = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    // const { register, handleSubmit, formState: { errors} } = useForm<formValue>();
    const form = useForm<formValue>({
        defaultValues: {
            title: '',
            contents: '',
        }
    });

    const { handleSubmit, formState: { errors } } = form;

    const onSubmit: SubmitHandler<formValue> = async () => {
        setIsDialogOpen(true);
    }

    const handleConfirm = async () => {
        const data = form.getValues();
        try {
            const response = await postData('/board', data);
            if (response.status === 200) {
                setIsDialogOpen(false);
                navigate('/board/list');
            }
        } catch (error) {
            console.log(error);
        }
    }

    /*const formSchema = z.object({
        title: z.string().min(2, {
            message: 'Title must be at least 2 characters.',
        }),
        contents: z.string().min(2, {
            message: 'Contents must be at least 2 characters.'
        })
    });*/

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            rules={{ required: "Title is required", minLength: { value: 2, message: "Title must be at least 2 characters" } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter post title"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="contents"
                            rules={{ required: "Contents is required", minLength: { value: 10, message: "Contents must be at least 10 characters" } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>contents</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your post contents here"
                                            className="resize-zone"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                        <Button variant="outline">Cancel</Button>
                    </form>
                </Form>

                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>글 등록</AlertDialogTitle>
                            <AlertDialogDescription>
                                게시글을 등록하시겠습니까?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleConfirm}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    )
}

export default BoardWrite;