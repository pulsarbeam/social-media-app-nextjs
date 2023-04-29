interface User {
  username: string
  displayName: string
  photoURL: string
}

export default function UserProfile({ user }: { user: User }) {
  return (
    <main>
      <div className="box-center">
        <img
          src={user.photoURL}
          alt={user.username}
          className="card-img-center"
        />
        <p>
          <i>@{user.username}</i>
        </p>
        <h1>{user.displayName}</h1>
      </div>
    </main>
  )
}
