import { Card, CardContent } from "../ui/card";

export default function PostCard({ post }) {
  return (
    <Card className="bg-blackberry-light shadow-3d hover:scale-[1.02] transition-transform duration-200">
      <CardContent>
        <h2 className="text-lg font-semibold">{post.user.name}</h2>
        <p className="text-gray-300">{post.text}</p>
      </CardContent>
    </Card>
  );
}
