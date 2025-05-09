import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <h1>Task Management Dashboard</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;

