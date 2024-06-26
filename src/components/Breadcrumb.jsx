import { useState } from "react";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const Breadcrumb = () => {
    return (
    <>
        <Stack spacing={2} sx={{ width: "100%", color: "white" }}>
            <Pagination count={10} />
        </Stack>
    </>
    )
}

export default Breadcrumb