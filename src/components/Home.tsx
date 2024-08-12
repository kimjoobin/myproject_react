import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {Link} from "react-router-dom";
import {Button} from "./ui/button";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">

            <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Get started with these common tasks</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-4">
                        <Button asChild>
                            <Link to="/member/join">회원가입</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest updates and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5">
                        <li>New board "Project X" created</li>
                        <li>3 tasks completed in "Marketing Campaign"</li>
                        <li>Team meeting scheduled for tomorrow</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

export default Home;