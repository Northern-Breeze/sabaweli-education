export default function (location: any, name: string): string | null {
    return new URLSearchParams(location).get(name);
}