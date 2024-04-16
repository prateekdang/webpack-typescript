import React, { useState } from 'react';

export function ClickCounter() {
    const [count, setcount] = useState<any>(0);
    return (<>
        <button onClick={() => setcount((c: any) => c + 1)}  >{count}</button>
    </>
    );
}

