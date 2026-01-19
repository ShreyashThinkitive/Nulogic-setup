import { Box, Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";

export function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log("email", email);
    console.log("password", password);



    const { mutate, isPending, isError, error } = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        mutate({
            body: {
                email,
                password,
            },
            headers: {
                TenantId: "3",
            },
        });
    };

    return (
        <>
            <Grid
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#f4f6f8",
                }}
            >
                <Card sx={{ width: 400, p: 2 }}>
                    <CardContent>
                        <Typography variant="h5" align="center" gutterBottom>
                            Login In
                        </Typography>

                        <Grid component="form" onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {isError && (
                                <Typography color="error" variant="body2">
                                    {error?.response?.data?.message || "Login failed"}
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                fullWidth
                                sx={{ mt: 2 }}
                            > {isPending ? (
                                <CircularProgress size={22} color="inherit" />
                            ) : (
                                "Login"
                            )}
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}