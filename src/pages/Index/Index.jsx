import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Index = () => {
    return (
        <>
            <div className="w-[425px]  min-h-screen bg-slate-300 flex flex-col m-auto">
                <div class="text-center mr-1 font-bold text-xl ml-40">INDEX</div>
                <footer class="fixed bottom-0  p-10 flex justify-center">
                    <div class="inline-flex">
                        <button class="px-4 py-2 ml-40 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-lg">
                        <Link to="/ActivityForm">Add Activity</Link>
                        </button>
                    </div>
                </footer>
            </div>
        </>
    );
};
