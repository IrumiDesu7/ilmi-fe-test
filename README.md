# ILMI Frontend Test

A Next.js-based web application featuring a modern UI with wallet connection capabilities.

## Technologies Used

- [Next.js](https://nextjs.org) - I used the app router version
- [Shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS
- [Lenis](https://github.com/studio-freight/lenis) - Smooth scroll library, super nice and nice smoothness
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection handling, first time use btw
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy the environment variables:

```bash
cp .env.example .env.local
```

4. Add your WalletConnect Project ID in the `.env.local`:

   - Get your Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Set it in your `.env.local`:

   ```
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID="your_project_id_here"
   ```

5. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions

- Used Shadcn components for consistent, accessible, and customizable UI elements
- Implemented smooth scrolling using Lenis for better user experience
- Integrated RainbowKit for a seamless wallet connection experience
- Utilized Tailwind CSS for efficient and responsive styling

## Challenges Faced

### Wallet Integration

The main challenge was implementing the wallet connection functionality, as it was a first-time implementation. Key challenges included:

- Understanding the RainbowKit configuration
- Setting up proper provider wrapping
- Handling wallet connection states and user interactions

## Project Structure

The project follows a standard Next.js App Router structure with:

- `app/` - Contains the main application routes and layouts
- `components/` - Reusable UI components and sections
- `lib/` - Utility functions and configurations

## Contributing

Feel free to submit issues and enhancement requests.
