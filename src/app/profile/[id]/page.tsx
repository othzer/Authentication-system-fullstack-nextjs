export default async function UserProfile({ params }: any) {
  const resolvedParams = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-4xl">
        Profile page
        <span className="text-black p-2 ml-2 rounded-lg bg-orange-600">
          {resolvedParams.id}
        </span>
      </p>
    </div>
  );
}

