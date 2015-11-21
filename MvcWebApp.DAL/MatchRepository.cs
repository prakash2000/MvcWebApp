using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.Entity;
using System.Threading.Tasks;
using MvcWebApp.DomainModel;

namespace MvcWebApp.DAL
{
    public class MatchRepository:IMatchRepository,IDisposable
    {
        private DataContext context;

        public MatchRepository(DataContext context)
        {
            this.context = context;
        }

        public IEnumerable<Match> GetMatches()
        {
            return context.Matches.ToList();
        }

        public Match GetMatchByID(int id)
        {
            return context.Matches.Find(id);
        }

        public void InsertMatch(Match newmatch)
        {
            context.Matches.Add(newmatch);
        }

        public void DeleteMatch(int matchID)
        {
            Match match = context.Matches.Find(matchID);
            context.Matches.Remove(match);
        }

        public void UpdateMatch(Match match)
        {
            context.Entry(match).State = EntityState.Modified;
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
