import { useRouteError } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import Layout from "~/components/Layout";

export async function loader({ request }: LoaderFunctionArgs) {
    throw json({ status: 404 }, { status: 404 });
}

export default function CatchAll() {
    return null; // This won't be rendered because the loader will throw
}