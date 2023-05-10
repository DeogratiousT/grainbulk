import Image from 'next/image';

const Logo = () => {
  return (
    <div>

        <Image
            src="/g-logo.png" 
            height={144}
            width={144}
            alt="Logo"
        />
    </div>
  )
}

export default Logo